import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Event } from "../../event/models/event.models";

interface IEventTypeAttr {
  name: string;
}

@Table({tableName:"event_type"})
export class EventType extends Model<EventType,IEventTypeAttr> {
@Column({
    type:DataType.INTEGER,autoIncrement:true,primaryKey:true
}) id:number

@Column({
    type:DataType.STRING,allowNull:false
}) name:string

@HasMany(()=>Event)
event:Event[]
}
