import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString} from "class-validator";

export class CreateVenueTypeDto {
  @ApiProperty({ description: "O'tkaziladigan joy nomi" })
  @IsString()
  @IsNotEmpty()
  name: string;
}
