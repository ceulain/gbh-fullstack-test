import { Controller, Get } from '@nestjs/common';
import { FiltersService } from './filters.service';

@Controller('filters')
export class FiltersController {
  constructor(private readonly manufacturersService: FiltersService) {}

  @Get()
  findAll() {
    return this.manufacturersService.findAll();
  }
}
