import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class FiltersService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAll() {
    const vehicles = this.databaseService.vehicle.findMany();

    const manufacturers = [
      ...new Set((await vehicles).map((vehicle) => vehicle.manufacturer)),
    ];
    const types = [...new Set((await vehicles).map((vehicle) => vehicle.type))];
    const years = [...new Set((await vehicles).map((vehicle) => vehicle.year))];

    const format = (value) => ({ value });

    return [
      {
        name: 'Marques',
        type: 'manufacturer',
        filter: manufacturers.map(format),
      },
      {
        name: 'Années',
        type: 'year',
        filter: years.map(format),
      },
      {
        name: 'Types',
        type: 'type',
        filter: types.map(format),
      },
    ];
  }

  findOne(id: number) {
    return `This action returns a #${id} filter`;
  }
}
