import { Injectable } from "@nestjs/common";
import { CreateLangDto } from "./dto/create-lang.dto";
import { UpdateLangDto } from "./dto/update-lang.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Lang } from "./models/lang.models";

@Injectable()
export class LangService {
  constructor(@InjectModel(Lang) private langRepo: typeof Lang) {}
  async create(createLangDto: CreateLangDto) {
    return this.langRepo.create(createLangDto);
  }

  async findAll() {
    return this.langRepo.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    return this.langRepo.findByPk(id);
  }

  async update(id: number, updateLangDto: UpdateLangDto) {
    return this.langRepo.update(updateLangDto, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: number) {
    return this.langRepo.destroy({ where: { id } });
  }
}
