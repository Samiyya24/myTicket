import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateDistrictDto {
   @ApiProperty({ description: "Tuman nomi" }) // swagger
  @IsString()
  @IsNotEmpty()
  district_name:string
}
