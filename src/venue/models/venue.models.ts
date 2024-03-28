import { BelongsToMany, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { VenueType } from "../../venue_type/models/venue_type.models";
import { VenueVenueType } from "./venue_venue_type.models";
import { Seat } from "../../seat/models/seat.models";
import { Event } from "../../event/models/event.models";

interface IVenueAttr {
  name: string;
  address: string;
  location: string;
  site: string;
  phone: string;
  schema: string;
  regionId: number;
  districtId: number;
}

@Table({ tableName: "venue" })
export class Venue extends Model<Venue, IVenueAttr> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;
  @Column({ type: DataType.STRING }) name: string;
  @Column({ type: DataType.STRING }) address: string;
  @Column({ type: DataType.STRING }) location: string;
  @Column({ type: DataType.STRING }) site: string;
  @Column({ type: DataType.STRING }) phone: string;
  @Column({ type: DataType.STRING }) schema: string;
  @Column({ type: DataType.INTEGER }) regionId: number;
  @Column({ type: DataType.INTEGER }) districtId: number;

  @BelongsToMany(() => VenueType, () => VenueVenueType)
  venueType: VenueType[];

  @HasMany(()=>Seat)
  seat:Seat[]
  @HasMany(()=>Event)
  event:Event[]
}

