import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IDistrictAttr {
  district_name: string;
}

@Table({ tableName: "district" })
export class District extends Model<District,IDistrictAttr>{

    @Column({
        type:DataType.INTEGER,autoIncrement:true,primaryKey:true
    }) id:number

    @Column({
        type:DataType.STRING,allowNull:false
    }) district_name: string;
}
