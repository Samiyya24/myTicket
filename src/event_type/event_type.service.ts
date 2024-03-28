import { Injectable } from '@nestjs/common';
import { CreateEventTypeDto } from './dto/create-event_type.dto';
import { UpdateEventTypeDto } from './dto/update-event_type.dto';
import { InjectModel } from '@nestjs/sequelize';
import { EventType } from './models/event_type.models';

@Injectable()
export class EventTypeService {
  constructor(@InjectModel(EventType) private eventTypeRepo:typeof EventType ){}
  async create(createEventTypeDto: CreateEventTypeDto) {
    return this.eventTypeRepo.create(createEventTypeDto);
  }

  async findAll() {
    return this.eventTypeRepo.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    return this.eventTypeRepo.findByPk(id);
  }

  async update(id: number, updateEventTypeDto: UpdateEventTypeDto) {
    return this.eventTypeRepo.update(updateEventTypeDto,{where:{id},returning:true});
  }

  async remove(id: number) {
    return this.eventTypeRepo.destroy({where:{id}});
  }
}
