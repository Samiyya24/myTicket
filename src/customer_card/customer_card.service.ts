import { Injectable } from '@nestjs/common';
import { CreateCustomerCardDto } from './dto/create-customer_card.dto';
import { UpdateCustomerCardDto } from './dto/update-customer_card.dto';
import { InjectModel } from '@nestjs/sequelize';
import { CustomerCard } from './models/customer_card.models';

@Injectable()
export class CustomerCardService {
  constructor(@InjectModel(CustomerCard) private customerCardRepo:typeof CustomerCard){}
  async create(createCustomerCardDto: CreateCustomerCardDto) {
    return this.customerCardRepo.create(createCustomerCardDto);
  }

  async findAll() {
    return this.customerCardRepo.findAll({include:{all:true}});
  }

  async findOne(id: number) {
    return this.customerCardRepo.findByPk(id);
  }

  async update(id: number, updateCustomerCardDto: UpdateCustomerCardDto) {
    return this.customerCardRepo.update(updateCustomerCardDto,{where:{id},returning:true});
  }

  async remove(id: number) {
    return this.customerCardRepo.destroy({where:{id}});
  }
}
