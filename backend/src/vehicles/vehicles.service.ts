import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { VehicleType } from '@prisma/client';
import { getOrderBy } from './utils';
import { Sort } from './types';
import { ITEM_PER_PAGE } from './constants';

@Injectable()
export class VehiclesService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAll(
    manufacturer?: string,
    type?: VehicleType,
    year?: number,
    sort?: Sort,
    page?: string,
  ) {
    if (manufacturer || type || year) {
      const where = {
        AND: [{ manufacturer }, { type }, { year }],
      };

      return this.databaseService.vehicle.findMany({
        ...getOrderBy(sort),
        where,
      });
    }

    return this.databaseService.vehicle.findMany({
      take: ITEM_PER_PAGE,
      skip: ((+page || 1) - 1) * ITEM_PER_PAGE,
      ...getOrderBy(sort),
    });
  }

  findOne(id: number) {
    const vehicle = this.databaseService.vehicle.findUnique({ where: { id } });

    if (!vehicle) {
      throw new NotFoundException('Vehicle not found');
    }

    return vehicle;
  }
}
