import { IsEmail, IsString, MinLength, IsOptional, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '../../users/entities/user.entity';

export class RegisterDto {
  @ApiProperty({ example: 'dianfemohamadou@gmail.com' })
  @IsEmail({}, { message: 'Veuillez fournir une adresse email valide' })
  email!: string;

  @ApiProperty({ example: 'password123' })
  @IsString()
  @MinLength(6, { message: 'Le mot de passe doit contenir au moins 6 caractères' })
  password!: string;

  @ApiProperty({ example: 'Mohamadou Dianfe', required: false })
  @IsOptional()
  @IsString()
  nom?: string;

  @ApiProperty({ enum: UserRole, default: UserRole.CLIENT, required: false })
  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;
}

export class LoginDto {
  @ApiProperty({ example: 'dianfemohamadou@gmail.com' })
  @IsEmail()
  email!: string;

  @ApiProperty({ example: 'password123' })
  @IsString()
  password!: string;
}