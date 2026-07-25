import { Controller, Get, Post, Body, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { WorkoutsService } from './workouts.service';
import { CreateWorkoutDto } from './dto/create-workout.dto';

@Controller('workouts')
export class WorkoutsController {
  constructor(private readonly workoutsService: WorkoutsService) {}

  @Post()
  async create(@Body() createWorkoutDto: CreateWorkoutDto, @Request() req: any) {
    // Note: On attachera l'utilisateur connecté via un Guard JWT plus tard
    return this.workoutsService.create(createWorkoutDto, req.user);
  }

  @Get('user/:userId')
  async findAllByUser(@Param('userId') userId: string) {
    return this.workoutsService.findAllByUser(userId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.workoutsService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.workoutsService.remove(id);
  }
}