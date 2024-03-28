import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, } from "class-validator";

export class CreateVenueDto {
  @ApiProperty({ description: "Joy nomi" }) // swagger
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: "Manzili" }) // swagger
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({ description: "Locatsiyasi" }) // swagger
  @IsString()
  location: string;

  @ApiProperty({ description: "Sayti" }) // swagger
  @IsString()
  site: string;

  @ApiProperty({ description: "Telefon raqami" }) // swagger
  @IsString()
  phone: string;
  @ApiProperty({ description: "Joylasuv sxemasi 2D,3D ko'rinishida" }) // swagger
  @IsString()
  schema: string;

  @IsNumber()
  @IsNotEmpty()
  venue_typeId: number;

  @IsNumber()
  @IsNotEmpty()
  regionId: number;

  @IsNumber()
  @IsNotEmpty()
  districtId: number;
}
