import { IsEmail, IsOptional, IsString, MinLength } from "class-validator";

export class CreateUserDto {
  @IsString()
  @MinLength(3)
  user!: string;

  @IsString()
  @IsEmail()
  email!: string;
}

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  @MinLength(3)
  user?: string;

  @IsString()
  @IsOptional()
  @IsEmail()
  email?: string;
}
