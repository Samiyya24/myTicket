import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ITicketAttr {
  eventId: number;
  seatId: number;
  price: number;
  service_fee: number;
  status: number;
  ticket_type: number;
}

@Table({ tableName: "ticket" })
export class Ticket extends Model<Ticket, ITicketAttr> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.INTEGER })
  price: number;

  @Column({ type: DataType.INTEGER })
  service_fee: number;

  @Column({ type: DataType.INTEGER })
  status: number;

  @Column({ type: DataType.INTEGER })
  ticket_type: number;

  @Column({ type: DataType.INTEGER })
  eventId: number;

  @Column({ type: DataType.INTEGER })
  seatId: number;
}
