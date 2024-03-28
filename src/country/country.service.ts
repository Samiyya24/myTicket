import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Country } from './models/country.models';

@Injectable()
export class CountryService {
  constructor(@InjectModel(Country) private countryRepo: typeof Country) {}
  async create(createCountryDto: CreateCountryDto) {
    return this.countryRepo.create(createCountryDto)
  }

  async findAll() {
    return this.countryRepo.findAll({include:{all:true}});
  }

  async findOne(id: number) {
    return this.countryRepo.findByPk(id);
  }

  async update(id: number, updateCountryDto: UpdateCountryDto) {
    return this.countryRepo.update(updateCountryDto,{where:{id},returning:true});
  }

  async remove(id: number) {
    return this.countryRepo.destroy({where:{id}});
  }
}
