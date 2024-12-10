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
    const pagination = {
      take: ITEM_PER_PAGE,
      skip: ((+page || 1) - 1) * ITEM_PER_PAGE,
    };

    if (manufacturer || type || year) {
      const where = {
        AND: [{ manufacturer }, { type }, { year }],
      };
      const vehicles = await this.databaseService.vehicle.findMany({
        ...getOrderBy(sort),
        ...pagination,
        where,
      });

      return {
        vehicles,
        meta: {
          total: await this.databaseService.vehicle.count({ where }),
          page: +page || 1,
          lastPage: Math.ceil(
            (await this.databaseService.vehicle.count({ where })) /
              ITEM_PER_PAGE,
          ),
        },
      };
    }

    const vehicles = await this.databaseService.vehicle.findMany({
      ...pagination,
      ...getOrderBy(sort),
    });

    return {
      vehicles,
      meta: {
        total: await this.databaseService.vehicle.count(),
        page: +page || 1,
        lastPage: Math.ceil(
          (await this.databaseService.vehicle.count()) / ITEM_PER_PAGE,
        ),
      },
    };
  }

  async findOne(id: number) {
    const vehicle = await this.databaseService.vehicle.findUnique({
      where: { id },
    });

    if (!vehicle) {
      throw new NotFoundException('Vehicle not found');
    }

    return vehicle;
  }
}
