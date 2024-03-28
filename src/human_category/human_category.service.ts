import { Injectable } from "@nestjs/common";
import { CreateHumanCategoryDto } from "./dto/create-human_category.dto";
import { UpdateHumanCategoryDto } from "./dto/update-human_category.dto";
import { InjectModel } from "@nestjs/sequelize";
import { HumanCategory } from "./models/human_category.models";

@Injectable()
export class HumanCategoryService {
  constructor(
    @InjectModel(HumanCategory) private humancategoryRepo: typeof HumanCategory
  ) {}
  async create(createHumanCategoryDto: CreateHumanCategoryDto) {
    return this.humancategoryRepo.create(createHumanCategoryDto);
  }

  async findAll() {
    return this.humancategoryRepo.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    return this.humancategoryRepo.findByPk(id);
  }

  async update(id: number, updateHumanCategoryDto: UpdateHumanCategoryDto) {
    return this.humancategoryRepo.update(updateHumanCategoryDto, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: number) {
    return this.humancategoryRepo.destroy({ where: { id } });
  }
}
