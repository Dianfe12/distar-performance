import { IsNotEmpty, IsString, IsOptional, IsArray } from 'class-validator';

export class CreateWorkoutDto {
  @IsString()
  @IsNotEmpty({ message: 'Le titre de la séance est obligatoire' })
  titre!: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsArray()
  @IsOptional()
  exercices?: any[];
}