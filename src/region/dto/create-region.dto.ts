import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateRegionDto {
  @ApiProperty({ description: "Viloyat nomi" }) // swagger
  @IsString()
  @IsNotEmpty()
  region_name: string;
}
