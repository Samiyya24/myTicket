import { Injectable } from '@nestjs/common';
import { CreateVenueTypeDto } from './dto/create-venue_type.dto';
import { UpdateVenueTypeDto } from './dto/update-venue_type.dto';
import { InjectModel } from '@nestjs/sequelize';
import { VenueType } from './models/venue_type.models';

@Injectable()
export class VenueTypeService {
  constructor(@InjectModel(VenueType) private venueTypeRepo: typeof VenueType) {}


  async getVenueTypeValue(value:string){
    return this.venueTypeRepo.findOne({where:{value}})
  }
  
   async create(createVenueTypeDto: CreateVenueTypeDto) {
    return this.venueTypeRepo.create(createVenueTypeDto);
  }

  
   async findAll() {
    return this.venueTypeRepo.findAll({include:{all:true}});
  }

  async findOne(id: number) {
    return this.venueTypeRepo.findByPk(id);
  }

   async update(id: number, updateVenueTypeDto: UpdateVenueTypeDto) {
    return this.venueTypeRepo.update(updateVenueTypeDto,{where:{id},returning:true})
  }

   async remove(id: number) {
    return this.venueTypeRepo.destroy({where:{id}});
  }
}
