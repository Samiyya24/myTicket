import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateEventTypeDto {
  @ApiProperty({ description: "Tadbir turi" }) // swagger
  @IsString()
  @IsNotEmpty()
  name: string;
  parent_event_typeId: number;
}
