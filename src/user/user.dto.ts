import { IsNotEmpty } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}