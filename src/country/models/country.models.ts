import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ICountryAttr {
  country_name: string;
}

@Table({tableName:"country"})
export class Country extends Model<Country,ICountryAttr>{
    @Column({
        type:DataType.INTEGER,primaryKey:true,autoIncrement:true
    }) id:number

    @Column({
        type:DataType.STRING,allowNull:false
    }) country_name:string
}
