import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ICartAttr {
  ticket_id: number;
  customer_id: number;
  createdAt: Date;
  finishedAt: Date;
  status_id: number;
}
@Table({ tableName: "cart" })
export class Cart extends Model<Cart, ICartAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @Column({
    type: DataType.INTEGER,
  })
  ticket_id: number;
  @Column({
    type: DataType.INTEGER,
  })
  customer_id: number;
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
  status_id: number;
}
