import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateCustomerDto {
  @ApiProperty({ description: "Mijoz ismi" }) // swagger
  @IsString()
  @IsNotEmpty()
  first_name: string;
  @ApiProperty({ description: "Mijoz familiyasi" }) // swagger
  @IsString()
  last_name: string;
  @ApiProperty({ description: "Mijoz telefon raqami" }) // swagger
  @IsNotEmpty()
  @IsString()
  phone: string;
  @ApiProperty({ description: "Mijozni kiritish paroli" }) // swagger
  @IsString()
  hashed_password: string;

  @ApiProperty({ description: "Mijozni emaili" }) // swagger
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;
  @ApiProperty({ description: "Mijozni tugilgan yili" }) // swagger
  @IsString()
  birth_date: Date;
  @ApiProperty({ description: "Mijozni jinsi" }) // swagger
  @IsString()
  gender: string;
  langId: number;
  @ApiProperty({ description: "Mijozga berilgan tokeni" }) // swagger
  @IsString()
  hashed_refresh_token: string;
}
