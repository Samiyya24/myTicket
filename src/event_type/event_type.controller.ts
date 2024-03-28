import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventTypeService } from './event_type.service';
import { CreateEventTypeDto } from './dto/create-event_type.dto';
import { UpdateEventTypeDto } from './dto/update-event_type.dto';

@Controller("event-type")
export class EventTypeController {
  constructor(private readonly eventTypeService: EventTypeService) {}

  @Post()
  async create(@Body() createEventTypeDto: CreateEventTypeDto) {
    return this.eventTypeService.create(createEventTypeDto);
  }

  @Get()
  async findAll() {
    return this.eventTypeService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return this.eventTypeService.findOne(+id);
  }

  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() updateEventTypeDto: UpdateEventTypeDto
  ) {
    return this.eventTypeService.update(+id, updateEventTypeDto);
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    return this.eventTypeService.remove(+id);
  }
}
