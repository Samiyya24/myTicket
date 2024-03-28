import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Cart } from './entities/cart.entity';

@Injectable()
export class CartService {
  constructor(@InjectModel(Cart) private cartRepo: typeof Cart) {}
  async create(createCartDto: CreateCartDto) {
    return this.cartRepo.create(createCartDto);
  }

  async findAll() {
    return this.cartRepo.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    return this.cartRepo.findByPk(id);
  }

  async update(id: number, updateCartDto: UpdateCartDto) {
    return this.cartRepo.update(updateCartDto, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: number) {
    return this.cartRepo.destroy({ where: { id } });
  }
}
