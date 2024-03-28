import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ICustomerCardAttr {
  customerId: number;
  name: string;
  phone: string;
  number: string;
  year: string;
  month: string;
  is_active: boolean;
  is_main: boolean;
}

@Table({ tableName: "customer_card" })
export class CustomerCard extends Model<CustomerCard, ICustomerCardAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.INTEGER,
  })
  customerId: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  name: string;

  @Column({
    type: DataType.STRING(15),
  })
  phone: string;

  @Column({
    type: DataType.STRING,
  })
  number: string;

  @Column({
    type: DataType.STRING,
  })
  year: string;

  @Column({
    type: DataType.STRING,
  })
  month: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_active: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_main: boolean;
}
