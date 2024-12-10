import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { formatFilter } from './utils';

@Injectable()
export class FiltersService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAll() {
    const vehicles = await this.databaseService.vehicle.findMany();

    const manufacturers = [
      ...new Set((await vehicles).map((vehicle) => vehicle.manufacturer)),
    ];
    const types = [...new Set((await vehicles).map((vehicle) => vehicle.type))];
    const years = [...new Set((await vehicles).map((vehicle) => vehicle.year))];

    return [
      {
        name: 'Marques',
        type: 'manufacturer',
        filter: manufacturers.map(formatFilter),
      },
      {
        name: 'Années',
        type: 'year',
        filter: years.map(formatFilter),
      },
      {
        name: 'Types',
        type: 'type',
        filter: types.map(formatFilter),
      },
    ];
  }
}
