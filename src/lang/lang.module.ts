import { Module } from '@nestjs/common';
import { LangService } from './lang.service';
import { LangController } from './lang.controller';
import { Sequelize } from 'sequelize';
import { SequelizeModule } from '@nestjs/sequelize';
import { Lang } from './models/lang.models';

@Module({
  imports:[SequelizeModule.forFeature([Lang])],
  controllers: [LangController],
  providers: [LangService],
})
export class LangModule {}
