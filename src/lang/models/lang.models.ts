
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Event } from "../../event/models/event.models";

interface ILangAttr {
  lang_name: string;
}

@Table({ tableName: "language" })
export class Lang extends Model<Lang,ILangAttr> {

    @Column({
        type:DataType.INTEGER,autoIncrement:true,primaryKey:true
    }) id : number

    @Column({
        type:DataType.STRING,allowNull:false
    }) lang_name:string

    @HasMany(()=>Event)
    event:Event[]
}
