import { Injectable } from "@nestjs/common";
import { CreateSeatDto } from "./dto/create-seat.dto";
import { UpdateSeatDto } from "./dto/update-seat.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Seat } from "./models/seat.models";

@Injectable()
export class SeatService {
  constructor(@InjectModel(Seat) private seatRepo: typeof Seat) {}

  async create(createSeatDto: CreateSeatDto) {
    return this.seatRepo.create(createSeatDto);
  }

  async findAll() {
    return this.seatRepo.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    return this.seatRepo.findByPk(id);
  }

  async update(id: number, updateSeatDto: UpdateSeatDto) {
    return this.seatRepo.update(updateSeatDto, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: number) {
    return this.seatRepo.destroy({ where: { id } });
  }
}
