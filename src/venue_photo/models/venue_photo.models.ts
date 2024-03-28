import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Venue } from "../../venue/models/venue.models";

interface IVenturePhotoAttr {
  url: string;
  venueId: number;
}
@Table({ tableName: "venue_photo" })
export class VenturePhoto extends Model<VenturePhoto, IVenturePhotoAttr> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;
  @Column({ type: DataType.STRING(100) }) url: string;

  
  @ForeignKey(()=>Venue)
  @Column({ type: DataType.INTEGER }) venueId: number;
  @BelongsTo(()=>Venue)
  venue:Venue
}