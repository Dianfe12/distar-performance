import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { WorkoutSession } from './entities/workout.entity';
import { WorkoutsController } from './workouts.controller';
import { WorkoutsService } from './workouts.service';
import { WeatherService } from '../external-api/weather.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([WorkoutSession]),
    HttpModule,
  ],
  controllers: [WorkoutsController],
  providers: [WorkoutsService, WeatherService],
  exports: [WorkoutsService],
})
export class WorkoutsModule {}