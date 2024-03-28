import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Seat } from "../../seat/models/seat.models";

interface ISeattypeAttr {
  name: string;
}

@Table({ tableName: "seat_type" })
export class SeatType extends Model<SeatType, ISeattypeAttr> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;
  @Column({ type: DataType.STRING })
  name: string;

  @HasMany(() => Seat)
  seat: Seat[];
}
