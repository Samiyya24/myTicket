import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ICustomerAttr {
  first_name: string;
  last_name: string;
  phone: string;
  hashed_password: string;
  email: string;
  birth_date: Date;
  gender: string;
  langId: number;
  hashed_refresh_token: string;
}

@Table({ tableName: "customer" })
export class Customer extends Model<Customer, ICustomerAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  first_name: string;

  @Column({
    type: DataType.STRING,
  })
  last_name: string;

  @Column({
    type: DataType.STRING,
  })
  phone: string;

  @Column({
    type: DataType.STRING,
  })
  hashed_password: string;

  @Column({
    type: DataType.STRING,
  })
  email: string;

  @Column({
    type: DataType.DATE,
  })
  birth_date: Date;

  @Column({
    type: DataType.STRING,
  })
  gender: string;

  @Column({
    type: DataType.INTEGER,
  })
  langId: number;

  @Column({
    type: DataType.STRING,
  })
  hashed_refresh_token: string;
}
