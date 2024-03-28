import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateVenuePhotoDto {
  @ApiProperty({ description: "Rasmni url manzili" })
  @IsString()
  @IsNotEmpty()
  url: string;

  @ApiProperty({ description: "venue tableda mavjud id nomeri" })
  @IsNumber()
  @IsNotEmpty()
  venueId: number;
}
