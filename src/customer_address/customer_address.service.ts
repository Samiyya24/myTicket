import { Injectable } from '@nestjs/common';
import { CreateCustomerAddressDto } from './dto/create-customer_address.dto';
import { UpdateCustomerAddressDto } from './dto/update-customer_address.dto';
import { InjectModel } from '@nestjs/sequelize';
import { CustomerAddress } from './models/customer_address.models';

@Injectable()
export class CustomerAddressService {
  constructor(@InjectModel(CustomerAddress) private customerAddressRepo:typeof CustomerAddress){}
  async create(createCustomerAddressDto: CreateCustomerAddressDto) {
    return this.customerAddressRepo.create(createCustomerAddressDto);
  }

  async findAll() {
    return this.customerAddressRepo.findAll({include:{all:true}});
  }

  async findOne(id: number) {
    return this.customerAddressRepo.findByPk(id);
  }

  async update(id: number, updateCustomerAddressDto: UpdateCustomerAddressDto) {
    return this.customerAddressRepo.update(updateCustomerAddressDto,{where:{id},returning:true})
  }

  async remove(id: number) {
    return this.customerAddressRepo.destroy({where:{id}});
  }
}
