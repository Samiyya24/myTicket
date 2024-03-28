import { Injectable } from "@nestjs/common";
import { CreateTicketDto } from "./dto/create-ticket.dto";
import { UpdateTicketDto } from "./dto/update-ticket.dto";
import { Ticket } from "./models/ticket.models";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class TicketService {
  constructor(@InjectModel(Ticket) private ticketRepo: typeof Ticket) {}
  async create(createTicketDto: CreateTicketDto) {
    return this.ticketRepo.create(createTicketDto);
  }

  async findAll() {
    return this.ticketRepo.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    return this.ticketRepo.findByPk(id);
  }

  async update(id: number, updateTicketDto: UpdateTicketDto) {
    return this.ticketRepo.update(updateTicketDto, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: number) {
    return this.ticketRepo.destroy({ where: { id } });
  }
}
