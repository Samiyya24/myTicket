import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustomerCardService } from './customer_card.service';
import { CreateCustomerCardDto } from './dto/create-customer_card.dto';
import { UpdateCustomerCardDto } from './dto/update-customer_card.dto';

@Controller('customer-card')
export class CustomerCardController {
  constructor(private readonly customerCardService: CustomerCardService) {}

  @Post()
  async create(@Body() createCustomerCardDto: CreateCustomerCardDto) {
    return this.customerCardService.create(createCustomerCardDto);
  }

  @Get()
  async findAll() {
    return this.customerCardService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.customerCardService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCustomerCardDto: UpdateCustomerCardDto) {
    return this.customerCardService.update(+id, updateCustomerCardDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.customerCardService.remove(+id);
  }
}
