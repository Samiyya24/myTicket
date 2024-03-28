import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsNumber } from "class-validator";

export class CreateCartDto {
  @ApiProperty({ description: "Ticket id" }) // swagger
  @IsNumber()
  ticket_id: number;
  @ApiProperty({ description: "Customer id" }) // swagger
  @IsNumber()
  customer_id: number;
  @ApiProperty({ description: "Created" }) // swagger
  @IsNotEmpty()
  @IsDate()
  createdAt: Date;
  @ApiProperty({ description: "Finished" }) // swagger
  @IsDate()
  finishedAt: Date;

  @ApiProperty({ description: "Status id" }) // swagger
  @IsNotEmpty()
  @IsNumber()
  status_id: number;
}
