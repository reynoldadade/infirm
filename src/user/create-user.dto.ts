/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  IsDate,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export enum RoleEnum {
  PATIENT = 'PATIENT',
  DOCTOR = 'DOCTOR',
  ADMIN = 'ADMIN',
}

export class CreateUserDto {
  @IsNotEmpty()
  familyName: string;
  @IsNotEmpty()
  firstName: string;
  @IsEmail()
  email: string;
  @IsOptional()
  otherNames: string;
  @IsEnum(RoleEnum)
  role: RoleEnum;
  @IsDate()
  updatedAt: Date;
  @IsNotEmpty()
  password: string;
}
