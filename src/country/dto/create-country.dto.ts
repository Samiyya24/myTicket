import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCountryDto {
     @ApiProperty({ description: "Davlat nomi" }) // swagger
  @IsString()
  @IsNotEmpty()
    country_name:string
}
