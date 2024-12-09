import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VehiclesModule } from './vehicles/vehicles.module';
import { DatabaseModule } from './database/database.module';
import { FiltersModule } from './filters/filters.module';

@Module({
  imports: [VehiclesModule, DatabaseModule, FiltersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
