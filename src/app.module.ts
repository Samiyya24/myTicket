import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { AdminModule } from "./admin/admin.module";
import { Admin } from "./admin/models/admin.models";
import { BookingModule } from "./booking/booking.module";
import { CustomerCardModule } from "./customer_card/customer_card.module";
import { CustomerAddressModule } from "./customer_address/customer_address.module";
import { CartModule } from "./cart/cart.module";
import { SeatTypeModule } from "./seat_type/seat_type.module";
import { HumanCategoryModule } from "./human_category/human_category.module";
import { EventTypeModule } from "./event_type/event_type.module";
import { CustomerModule } from "./customer/customer.module";
import { EventModule } from "./event/event.module";
import { TicketModule } from "./ticket/ticket.module";
import { SeatModule } from "./seat/seat.module";
import { VenueTypeModule } from "./venue_type/venue_type.module";
import { VenuePhotoModule } from "./venue_photo/venue_photo.module";
import { VenueModule } from "./venue/venue.module";
import { VenueType } from "./venue_type/models/venue_type.models";
import { VenturePhoto } from "./venue_photo/models/venue_photo.models";
import { Venue } from "./venue/models/venue.models";
import { SeatType } from "./seat_type/models/seat_type.models";
import { Seat } from "./seat/models/seat.models";
import { HumanCategory } from "./human_category/models/human_category.models";
import { Ticket } from "./ticket/models/ticket.models";
import { VenueVenueType } from "./venue/models/venue_venue_type.models";
import { EventType } from "./event_type/models/event_type.models";
import { Event } from "./event/models/event.models";
import { CustomerCard } from "./customer_card/models/customer_card.models";
import { CustomerAddress } from "./customer_address/models/customer_address.models";
import { Customer } from "./customer/models/customer.models";
import { CountryModule } from "./country/country.module";
import { Country } from "./country/models/country.models";
import { RegionModule } from "./region/region.module";
import { Region } from "./region/models/region.models";
import { DistrictModule } from "./district/district.module";
import { District } from "./district/models/district.models";
import { LangModule } from "./lang/lang.module";
import { Lang } from "./lang/models/lang.models";
import { FileModule } from "./file/file.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath:join(__dirname, "static"),
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.PG_HOST,
      port: Number(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
      models: [
        Admin,
        VenueType,
        VenturePhoto,
        Venue,
        SeatType,
        Seat,
        HumanCategory,
        Ticket,
        VenueVenueType,
        EventType,
        Event,
        CustomerCard,
        CustomerAddress,
        Customer,
        Country,
        Region,
        District,
        Lang,
      ],
      autoLoadModels: true,
      sync: { alter: true },
      logging: false,
    }),
    AdminModule,
    BookingModule,
    CustomerCardModule,
    CustomerAddressModule,
    CartModule,
    SeatTypeModule,
    HumanCategoryModule,
    EventTypeModule,
    CustomerModule,
    EventModule,
    TicketModule,
    SeatModule,
    VenueTypeModule,
    VenuePhotoModule,
    VenueModule,
    CountryModule,
    RegionModule,
    DistrictModule,
    LangModule,
    FileModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
