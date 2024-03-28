import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Event } from "../../event/models/event.models";

interface IHumanCategoryAttr {
  name: string;
  start_age: Date;
  finish_age: Date;
  gender: string;
}

@Table({ tableName: "human_category" })
export class HumanCategory extends Model<HumanCategory, IHumanCategoryAttr> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @Column({ type: DataType.DATE })
  start_age: Date;

  @Column({ type: DataType.DATE })
  finish_age: Date;

  @Column({ type: DataType.STRING })
  gender: string;


  @HasMany(()=>Event)
  event:Event[]
}
