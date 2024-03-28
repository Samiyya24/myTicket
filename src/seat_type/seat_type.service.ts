import { Injectable } from "@nestjs/common";
import { CreateSeatTypeDto } from "./dto/create-seat_type.dto";
import { UpdateSeatTypeDto } from "./dto/update-seat_type.dto";
import { InjectModel } from "@nestjs/sequelize";
import { SeatType } from "./models/seat_type.models";

@Injectable()
export class SeatTypeService {
  constructor(@InjectModel(SeatType) private seatTypeRepo: typeof SeatType) {}

  async create(createSeatTypeDto: CreateSeatTypeDto) {
    return this.seatTypeRepo.create(createSeatTypeDto);
  }

  async findAll() {
    return this.seatTypeRepo.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    return this.seatTypeRepo.findByPk(id);
  }

  async update(id: number, updateSeatTypeDto: UpdateSeatTypeDto) {
    return this.seatTypeRepo.update(updateSeatTypeDto, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: number) {
    return this.seatTypeRepo.destroy({ where: { id } });
  }
}
