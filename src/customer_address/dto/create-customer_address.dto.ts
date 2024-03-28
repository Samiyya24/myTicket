import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCustomerAddressDto {
  customerId: number;

  @ApiProperty({ description: "Mijoz yashash manzili" }) // swagger
  @IsString()
  @IsNotEmpty()
  name: string;
  countryId: number;
  regionId: number;
  districtId: number;

  @ApiProperty({ description: "Mijoz ko'cha nomi" }) // swagger
  @IsString()
  street: string;
  @ApiProperty({ description: "Mijoz uy raqami" }) // swagger
  @IsString()
  house: string;
  @ApiProperty({ description: "Mijoz kvartira raqami" }) // swagger
  @IsString()
  flat: string;
  @ApiProperty({ description: "Mijoz uy manzili lokatsiyasi" }) // swagger
  @IsString()
  location: string;
  @IsString()
  post_index: string;

  @ApiProperty({ description: "Qo'shimcha ma'lumotlari" }) // swagger
  @IsString()
  info: string;
}
