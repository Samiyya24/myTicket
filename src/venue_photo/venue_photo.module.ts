import { Module } from '@nestjs/common';
import { VenuePhotoService } from './venue_photo.service';
import { VenuePhotoController } from './venue_photo.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { VenturePhoto } from './models/venue_photo.models';
import { FileModule } from '../file/file.module';

@Module({
  imports: [SequelizeModule.forFeature([VenturePhoto]), FileModule],
  controllers: [VenuePhotoController],
  providers: [VenuePhotoService],
})
export class VenuePhotoModule {}
