import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from "class-validator";

export class CreateAdminDto {
  @ApiProperty({ description: "Admin nomi" })
  @IsString({ message: "String bo'lishi kerak" })
  @IsNotEmpty({ message: "Bo'sh bo'lmasligi kerak" })
  name: string;

  @ApiProperty({ description: "Login" })
  @IsString({ message: "String bo'lishi kerak" })
  @IsNotEmpty({ message: "Bo'sh bo'lmasligi kerak" })
  login: string;

  @ApiProperty({ description: "Password(hashlangan)" })
  @IsString()
  @IsNotEmpty()
  // @IsStrongPassword({
  //   minLength: 6,
  //   minLowercase: 0,
  //   minUppercase: 0,
  //   minSymbols: 0,
  //   minNumbers: 6,
  // })
  hashed_password: string;

  @ApiProperty({ description: "Refresh token(hashlangan)" })
  // @IsString()
  // @Type(()=> String)
  hashed_refresh_token: string;

  @ApiProperty({ description: "Email" })
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({ description: "Phone number" })
  @IsString()
  phone: string;
}
