import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsNumber, IsNumberString, IsString } from 'class-validator';

export class LoginUserDto {
  @IsEmail()
  username: string;

  @IsString()
  password: string;
}
export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
