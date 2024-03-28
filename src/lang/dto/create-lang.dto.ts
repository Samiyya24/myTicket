import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateLangDto {
  @ApiProperty({ description: "Mavjud tillar nomlari" }) // swagger
  @IsString()
  @IsNotEmpty()
  lang_name: string;
}
