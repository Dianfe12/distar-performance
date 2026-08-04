import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { Payment } from './payment.entity';
import { WorkoutSession } from './workouts/entities/workout.entity';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { WorkoutsModule } from './workouts/workouts.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'distarperf',
      entities: [User, Payment, WorkoutSession],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    WorkoutsModule,
  ],
})
export class AppModule {}