import { Injectable } from "@nestjs/common";
import { CreateVenueDto } from "./dto/create-venue.dto";
import { UpdateVenueDto } from "./dto/update-venue.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Venue } from "./models/venue.models";

@Injectable()
export class VenueService {
  constructor(@InjectModel(Venue) private venueRepo: typeof Venue) {}

  async createVenue(createVenueDto: CreateVenueDto) {
    const newVenue = await this.venueRepo.create(createVenueDto);
    await newVenue.$set("venueType", createVenueDto.venue_typeId);
    await newVenue.save();
    return newVenue;
  }

   async findAll() {
    return this.venueRepo.findAll({ include: { all: true } });
  }

   async findOne(id: number) {
    return this.venueRepo.findByPk(id);
  }

   async update(id: number, updateVenueDto: UpdateVenueDto) {
    return this.venueRepo.create(updateVenueDto, {
      where: { id },
      returning: true,
    });
  }

   async remove(id: number) {
    return this.venueRepo.destroy({ where: { id } });
  }
}
