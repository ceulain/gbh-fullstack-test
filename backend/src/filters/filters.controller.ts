import { Controller, Get, Param } from '@nestjs/common';
import { FiltersService } from './filters.service';

@Controller('filters')
export class FiltersController {
  constructor(private readonly manufacturersService: FiltersService) {}

  @Get()
  findAll() {
    return this.manufacturersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.manufacturersService.findOne(+id);
  }
}
