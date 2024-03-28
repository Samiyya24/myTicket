import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Booking } from './models.js/booking.models';

@Injectable()
export class BookingService {
  constructor(@InjectModel(Booking) private bookingRepo: typeof Booking) {}

  async create(createBookingDto: CreateBookingDto) {
    return this.bookingRepo.create(createBookingDto);
  }

  async findAll() {
    return this.bookingRepo.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    return this.bookingRepo.findByPk(id);
  }

  async update(id: number, updateBookingDto: UpdateBookingDto) {
    return this.bookingRepo.update(updateBookingDto, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: number) {
    return this.bookingRepo.destroy({ where: { id } });
  }
}
