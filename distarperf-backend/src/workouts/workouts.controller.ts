import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WorkoutSession } from './entities/workout.entity';
import { WeatherService } from '../external-api/weather.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Workouts & Météo')
@Controller('workouts')
export class WorkoutsController {
  constructor(
    @InjectRepository(WorkoutSession)
    private workoutRepo: Repository<WorkoutSession>,
    private weatherService: WeatherService,
  ) {}

 @Get('weather')
  @ApiOperation({ summary: 'Obtenir la météo locale' })
  getWeather() {
 return this.weatherService.getWeatherForDakar();
  }

@Get()
  @ApiOperation({ summary: 'Liste toutes les séances' })
  async findAll() {
    const workouts = await this.workoutRepo.find();
    
    // Si la table MySQL est encore vide, on renvoie des séances de démo
    if (workouts.length === 0) {
      return [
        { id: 1, title: 'Jour 1 : Pectoraux & Triceps', description: 'Développé couché, écartés poulie, extensions triceps.', duration: '1h 15m', isCompleted: false },
        { id: 2, title: 'Jour 2 : Dos & Biceps', description: 'Tractions, tirage vertical, curls haltères.', duration: '1h 00m', isCompleted: false },
        { id: 3, title: 'Jour 3 : Jambes & Abdos', description: 'Squats, presse à cuisses, gainage dynamique.', duration: '1h 30m', isCompleted: true }
      ];
    }

    return workouts;
  }
@Post()
  @ApiOperation({ summary: 'Créer une nouvelle séance' })
  async create(@Body() body: { title: string; description: string; duration: string }) {
    return await this.workoutRepo.save(body);
  }
  
  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer une séance' })
  async remove(@Param('id') id: string) {
    return await this.workoutRepo.delete(id);
  }
  @Patch(':id/emarger')
  @ApiOperation({ summary: 'Valider l émargement d une séance' })
  async emarger(@Param('id') id: string) {
    await this.workoutRepo.update(id, { isCompleted: true });
    return { message: 'Émargement enregistré avec succès' };
  }
}