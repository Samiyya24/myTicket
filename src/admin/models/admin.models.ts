import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface ICreatAdminAttr {
  name: string;
  login: string;
  hashed_password: string;
  hashed_refresh_token: string;
  is_active: boolean;
  is_creator: boolean;
  email: string;
  phone: string;
}

@Table({ tableName: "admin" })
export class Admin extends Model<Admin, ICreatAdminAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @Column({ type: DataType.STRING })
  login: string;

  @Column({ type: DataType.STRING })
  hashed_password: string;

  @Column({ type: DataType.STRING })
  hashed_refresh_token: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  is_active: boolean;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  is_creator: boolean;

  @Column({ type: DataType.STRING })
  email: string;

  @Column({ type: DataType.STRING })
  phone: string;
}
