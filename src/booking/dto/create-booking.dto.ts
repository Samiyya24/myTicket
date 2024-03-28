import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsNumber } from "class-validator";

export class CreateBookingDto {
  @ApiProperty({ description: "Cart id" }) // swagger
  @IsNumber()
  cart_id: number;

  @ApiProperty({ description: "Created" }) // swagger
  @IsNotEmpty()
  @IsDate()
  createdAt: Date;

  @ApiProperty({ description: "Finished" }) // swagger
  @IsDate()
  finishedAt: Date;

  @ApiProperty({ description: "payment method id" }) // swagger
  @IsNumber()
  payment_method_id: number;
  @ApiProperty({ description: "delivery method id" }) // swagger
  @IsNumber()
  delivery_method_id: number;
  @ApiProperty({ description: "discount coupon id" }) // swagger
  @IsNumber()
  discount_coupon_id: number;
  @ApiProperty({ description: "Status id" }) // swagger
  @IsNumber()
  status_id: number;
}
