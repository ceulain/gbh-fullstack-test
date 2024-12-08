import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { VehicleType } from '@prisma/client';

@Injectable()
export class VehiclesService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAll(manufacturer?: string, type?: VehicleType, year?: number) {
    if (manufacturer || type || year) {
      return this.databaseService.vehicle.findMany({
        where: {
          manufacturer,
          type,
          year,
        },
      });
    }

    return this.databaseService.vehicle.findMany();
  }

  findOne(id: number) {
    return this.databaseService.vehicle.findUnique({ where: { id } });
  }
}
