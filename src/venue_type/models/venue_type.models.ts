import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Venue } from "../../venue/models/venue.models";
import { VenueVenueType } from "../../venue/models/venue_venue_type.models";

interface IVenueTypeAttr{
    name:string
}

@Table({ tableName: "venue_type" })
export class VenueType extends Model<VenueType, IVenueTypeAttr> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;
  @Column({type:DataType.STRING(100)}) name: string;


  @BelongsToMany(()=>Venue, ()=>VenueVenueType)
  venue:Venue[]
}
