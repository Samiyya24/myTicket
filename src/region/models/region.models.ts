import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IRegion {
  region_name:string
}

@Table({ tableName: "region" })
export class Region extends Model<Region,IRegion>{

    @Column({
        type:DataType.INTEGER,primaryKey:true,autoIncrement:true
    }) id:number

    @Column({
        type:DataType.STRING
    }) region_name:string
}
