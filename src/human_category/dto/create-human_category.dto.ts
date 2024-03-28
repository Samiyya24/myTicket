import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreateHumanCategoryDto {
  @ApiProperty({ description: "Mijoz ismi" }) // swagger
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: "Mijoz boshlang'zich yoshi" }) // swagger
  @IsDate()
  @IsNotEmpty()
  start_age: Date;

  @ApiProperty({ description: "Mijoz yosh chegarasi" }) // swagger
  @IsDate()
  @IsNotEmpty()
  finish_age: Date;

  @ApiProperty({ example: "ayol yoki erkak", description: "Mijoz jinsi" }) // swagger
  @IsString()
  @IsNotEmpty()
  gender: string;
}
