import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { CreateEventDto } from "./dto/create-event.dto";
import { UpdateEventDto } from "./dto/update-event.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Event } from "./models/event.models";
import { FileService } from "../file/file.service";

@Injectable()
export class EventService {
  constructor(
    @InjectModel(Event) private eventRepo: typeof Event,
    private readonly fileService: FileService
  ) {}

  async create(createEventDto: CreateEventDto, image: any) {
    const fileName = await this.fileService.saveFile(image);
    const event = this.eventRepo.create({ ...createEventDto, photo:fileName});
    return event;
  }

  async findAll() {
    return this.eventRepo.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    return this.eventRepo.findByPk(id);
  }

  async update(id: number, updateEventDto: UpdateEventDto) {
    return this.eventRepo.update(updateEventDto, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: number) {
    return this.eventRepo.destroy({ where: { id } });
  }
}
