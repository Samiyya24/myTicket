import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IBookingAttr {
  cart_id: number;
  createdAt: Date;
  finishedAt: Date;
  payment_method_id: number;
  delivery_method_id: number;
  discount_coupon_id: number;
  status_id: number;
}
@Table({ tableName: "booking" })
export class Booking extends Model<Booking, IBookingAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @Column({
    type: DataType.INTEGER,
  })
  cart_id: number;
  @Column({
    type: DataType.DATE,
  })
  createdAt: Date;
  @Column({
    type: DataType.DATE,
  })
  finishedAt: Date;
  @Column({
    type: DataType.INTEGER,
  })
  payment_method_id: number;
  @Column({
    type: DataType.INTEGER,
  })
  delivery_method_id: number;
  @Column({
    type: DataType.INTEGER,
  })
  discount_coupon_id: number;
  @Column({
    type: DataType.INTEGER,
  })
  status_id: number;
}
