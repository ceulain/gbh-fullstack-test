import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { VehicleType } from '@prisma/client';

@Injectable()
export class VehiclesService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAll(
    manufacturer?: string,
    type?: VehicleType,
    year = undefined,
    sort?: 'price' | 'year',
    page?: string,
  ) {
    let sorting;

    if (sort === 'price') {
      sorting = {
        orderBy: [
          {
            price: 'desc',
          },
        ],
      };
    } else if (sort === 'year') {
      sorting = {
        orderBy: [
          {
            year: 'desc',
          },
        ],
      };
    } else {
      sorting = {};
    }
    if (manufacturer || type || year) {
      const where = {
        AND: [{ manufacturer }, { type }, { year }],
      };
      return this.databaseService.vehicle.findMany({
        ...sorting,
        where,
      });
    }

    return this.databaseService.vehicle.findMany({
      take: 4,
      skip: ((Number(page) || 1) - 1) * 4,
      ...sorting,
    });
  }

  findOne(id: number) {
    return this.databaseService.vehicle.findUnique({ where: { id } });
  }
}
