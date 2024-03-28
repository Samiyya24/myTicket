import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsString, isString } from "class-validator";

export class CreateEventDto {
  @ApiProperty({ description: "Tadbir nomi" }) // swagger
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: "Tadbir rasmlari" }) // swagger
  @IsString()
  photo: string;

  @ApiProperty({ description: "Tadbir  sanasi" }) // swagger
  @IsDate()
  start_date: Date;

  @ApiProperty({ description: "Tadbir boshlanish vaqti" }) // swagger
  @IsDate()
  start_time: Date;
  @ApiProperty({ description: "Tadbir tugash vaqti" }) // swagger
  @IsDate()
  finish_date: Date;
  @ApiProperty({ description: "Tadbir tugash sanasi" }) // swagger
  @IsDate()
  finish_time: Date;

  @ApiProperty({ description: "Tadbir xaqida batafsil ma'lumot" }) // swagger
  @IsString()
  info: string;
  @ApiProperty({ description: "Tadbir tashkil etilgan sana" }) // swagger
  @IsDate()
  release_date: Date;

  event_typeId: number;
  human_categoryId: number;
  venueId: number;
  langId: number;
}
