import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WorkoutSession } from './entities/workout.entity';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { User } from '../users/entities/user.entity';

@Injectable()
export class WorkoutsService {
  constructor(
    @InjectRepository(WorkoutSession)
    private readonly workoutRepository: Repository<WorkoutSession>,
  ) {}

  async create(createWorkoutDto: CreateWorkoutDto, user: User): Promise<WorkoutSession> {
    const workout = this.workoutRepository.create({
      ...createWorkoutDto,
      user,
    });
    return await this.workoutRepository.save(workout);
  }

  async findAllByUser(userId: string): Promise<WorkoutSession[]> {
    return await this.workoutRepository.find({
      where: { user: { id: userId } },
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: string): Promise<WorkoutSession> {
  const workout = await this.workoutRepository.findOne({
    where: { id },
    relations: { user: true },
  });
  if (!workout) {
    throw new NotFoundException('Séance non trouvée');
  }
  return workout;
}

  async remove(id: string): Promise<void> {
    const workout = await this.findOne(id);
    await this.workoutRepository.remove(workout);
  }
}