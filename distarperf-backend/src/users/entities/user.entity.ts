import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

export enum UserRole {
  ATHLETE = 'ATHLETE',
  COACH = 'COACH',
  ADMIN = 'ADMIN',
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  nom!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.ATHLETE })
  role!: UserRole;

  @Column({ type: 'float', nullable: true })
  poids?: number;

  @Column({ type: 'float', nullable: true })
  masseMusculaire?: number;

  @CreateDateColumn()
  createdAt!: Date;
}