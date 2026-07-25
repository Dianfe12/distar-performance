import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Workout } from './entities/workout.entity';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { User } from '../users/entities/user.entity';

@Injectable()
export class WorkoutsService {
  constructor(
    @InjectRepository(Workout)
    private readonly workoutRepository: Repository<Workout>,
  ) {}

  async create(createWorkoutDto: CreateWorkoutDto, user: User): Promise<Workout> {
    const workout = this.workoutRepository.create({
      ...createWorkoutDto,
      user,
    });
    return await this.workoutRepository.save(workout);
  }

  async findAllByUser(userId: string): Promise<Workout[]> {
    return await this.workoutRepository.find({
      where: { user: { id: userId } },
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: string): Promise<Workout> {
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