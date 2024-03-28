import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { Venue } from "./venue.models";
import { VenueType } from "../../venue_type/models/venue_type.models";

interface IVenyVenyType{
    venueId:number
    venue_typeId:number
}

@Table({ tableName: "venue_venue_type" })
export class VenueVenueType extends Model<VenueVenueType, IVenyVenyType> {

@ForeignKey(()=>Venue)
  @Column({type: DataType.INTEGER}) venueId: number;

  @ForeignKey(()=>VenueType)
  @Column({ type: DataType.INTEGER }) venue_typeId: number;
}
