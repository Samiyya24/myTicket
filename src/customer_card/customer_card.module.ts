import { Module } from '@nestjs/common';
import { CustomerCardService } from './customer_card.service';
import { CustomerCardController } from './customer_card.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { CustomerCard } from './models/customer_card.models';


@Module({
  imports: [SequelizeModule.forFeature([CustomerCard])],
  controllers: [CustomerCardController],
  providers: [CustomerCardService],
})
export class CustomerCardModule {}
