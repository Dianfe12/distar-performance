import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { WorkoutsModule } from './workouts/workouts.module';
import { User } from './users/entities/user.entity';
import { Workout } from './workouts/entities/workout.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',            // <--- On passe en MySQL
      host: 'localhost',
      port: 3306,               // <--- Port standard XAMPP
      username: 'root',         // <--- Utilisateur par défaut XAMPP
      password: '',             // <--- Pas de mot de passe par défaut sur XAMPP
      database: 'distarperf',   // <--- Nom de ta base de données
      entities: [User, Workout],
      synchronize: true,        // Crée automatiquement les tables dans MySQL
    }),
    UsersModule,
    AuthModule,
    WorkoutsModule,
  ],
})
export class AppModule {}