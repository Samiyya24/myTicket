import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ICustomerAddressAttr {
  customerId: number;
  name: string;
  countryId: number;
  regionId: number;
  districtId: number;
  street: string;
  house: string;
  flat: string;
  location: string;
  post_index: string;
  info: string;
}

@Table({ tableName: "customer_address" })
export class CustomerAddress extends Model<
  CustomerAddress,
  ICustomerAddressAttr
> {
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
    type: DataType.INTEGER,
  })
  countryId: number;

  @Column({
    type: DataType.INTEGER,
  })
  regionId: number;

  @Column({
    type: DataType.INTEGER,
  })
  districtId: number;

  @Column({
    type: DataType.STRING,
  })
  street: string;

  @Column({
    type: DataType.STRING,
  })
  house: string;

  @Column({
    type: DataType.STRING,
  })
  flat: string;

  @Column({
    type: DataType.STRING,
  })
  location: string;

  @Column({
    type: DataType.STRING,
  })
  post_index: string;

  @Column({
    type: DataType.STRING,
  })
  info: string;
}
