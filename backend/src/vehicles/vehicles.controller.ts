import { Controller, Get, Param, Query } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { VehicleType } from '@prisma/client';

@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Get()
  findAll(
    @Query('manufacturer') manufacturer?: string,
    @Query('type') type?: VehicleType,
    @Query('year') year?: string,
    @Query('sort') sort?: 'year' | 'price',
    @Query('page') page?: string,
  ) {
    return this.vehiclesService.findAll(
      manufacturer,
      type,
      !!year ? +year : undefined,
      sort,
      page,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vehiclesService.findOne(+id);
  }
}
