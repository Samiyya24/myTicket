import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateSeatDto {
  @ApiProperty({ description: "Joyni joylashgan sektori" }) // swagger
  @IsNumber()
  @IsNotEmpty()
  sector: number;

  @ApiProperty({ description: "Qator nomeri" }) // swagger
  @IsNumber()
  @IsNotEmpty()
  row_number: number;

  @ApiProperty({ description: "Joy nomeri" }) // swagger
  @IsNumber()
  @IsNotEmpty()
  number: number;

  @IsNumber()
  @IsNotEmpty()
  venueId: number;

  @IsNumber()
  @IsNotEmpty()
  seat_typeId: number;

  @ApiProperty({ description: "Joyni sxema bo'yicha lokatsiyasi" }) // swagger
  @IsString()
  location_in_schema: string;
}
