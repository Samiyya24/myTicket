import { Injectable } from "@nestjs/common";
import { CreateVenuePhotoDto } from "./dto/create-venue_photo.dto";
import { UpdateVenuePhotoDto } from "./dto/update-venue_photo.dto";
import { InjectModel } from "@nestjs/sequelize";
import { VenturePhoto } from "./models/venue_photo.models";
import { FileService } from "../file/file.service";

@Injectable()
export class VenuePhotoService {
  constructor(
    @InjectModel(VenturePhoto) private venturePhotoRepo: typeof VenturePhoto,  private readonly fileService: FileService
  ) {}

   async create(createVenuePhotoDto: CreateVenuePhotoDto) {
     const fileName = await this.fileService.saveFile(Image);
     const venue_photo = this.venturePhotoRepo.create({
       ...createVenuePhotoDto,
       url: fileName,
     });
     return venue_photo;
   }
   async findAll() {
    return this.venturePhotoRepo.findAll({include:{all:true}});
  }

   async findOne(id: number) {
    return this.venturePhotoRepo.findByPk(id);
  }

   async update(id: number, updateVenuePhotoDto: UpdateVenuePhotoDto) {
    return this.venturePhotoRepo.update(updateVenuePhotoDto, {
      where: { id },
      returning: true,
    });
  }

   async remove(id: number) {
    return this.venturePhotoRepo.destroy({where:{id}});
  }
}
