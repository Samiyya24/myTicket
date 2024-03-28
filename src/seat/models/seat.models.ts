import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { SeatType } from "../../seat_type/models/seat_type.models";
import { Venue } from "../../venue/models/venue.models";

interface ISeatAttr {
  sector: number;
  row_number: number;
  number: number;
  venueId: number;
  seat_typeId: number;
  location_in_schema: string;
}

@Table({ tableName: "seat" })
export class Seat extends Model<Seat, ISeatAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.INTEGER })
  sector: number;

  @Column({ type: DataType.INTEGER })
  row_number: number;

  @Column({ type: DataType.INTEGER })
  number: number;

  @Column({ type: DataType.STRING })
  location_in_schema: string;

  @ForeignKey(()=>Venue)
  @Column({ type: DataType.INTEGER })
  venueId: number;
  @BelongsTo(()=>Venue)
  venue:Venue

@ForeignKey(()=>SeatType)
@Column({ type: DataType.INTEGER })
  seat_typeId: number;

  @BelongsTo(()=>SeatType)
  seatType:SeatType
}
