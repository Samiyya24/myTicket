import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateTicketDto {
  @IsNumber()
  @IsNotEmpty()
  eventId: number;

  @IsNumber()
  @IsNotEmpty()
  seatId: number;

  @ApiProperty({ description: "Bilet narxi" }) // swagger
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty({ description: "Xizmat xaqqi" }) // swagger
  @IsNumber()
  @IsNotEmpty()
  service_fee: number;

  @ApiProperty({ description: "Statusi" }) // swagger
  @IsNumber()
  status: number;

  @ApiProperty({ description: "Bilet turi" }) // swagger
  @IsNumber()
  ticket_type: number;
}
