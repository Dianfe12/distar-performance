import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('workouts')
export class WorkoutSession {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  titre!: string;

  @Column()
  description!: string;

  @Column({ default: false })
  isCompleted!: boolean;

  @ManyToOne(() => User, { onDelete: 'CASCADE', nullable: true })
  user?: User;

  @CreateDateColumn()
  createdAt!: Date;
}