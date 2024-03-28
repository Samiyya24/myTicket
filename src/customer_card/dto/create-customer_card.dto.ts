import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCustomerCardDto {
  customerId: number;

  @ApiProperty({ description: "Mijoz cartasi nomi" }) // swagger
  @IsString()
  @IsNotEmpty()
  name: string;
  @ApiProperty({ description: "Mijoz cartasiga biriktirilgan telefon nomer" }) // swagger
  @IsString()
  phone: string;
  @ApiProperty({ description: "Mijoz cartasi raqami" }) // swagger
  @IsString()
  number: string;
  @ApiProperty({ description: "Mijoz cartasi amal qilish muddati(yil)" }) // swagger
  @IsString()
  year: string;
  @ApiProperty({ description: "Mijoz cartasi amal qilish muddati(oy)" }) // swagger
  @IsString()
  month: string;
  is_active: boolean;
  is_main: boolean;
}
