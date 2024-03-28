import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateSeatTypeDto {
  @ApiProperty({ description: "Joy turi" }) // swagger
  @IsString()
  @IsNotEmpty()
  name: string;
}
