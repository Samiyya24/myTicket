import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Lang } from "../../lang/models/lang.models";
import { Venue } from "../../venue/models/venue.models";
import { HumanCategory } from "../../human_category/models/human_category.models";
import { EventType } from "../../event_type/models/event_type.models";

interface IEventAttr {
  name: string;
  photo: string;
  start_date: Date;
  start_time: Date;
  finish_date: Date;
  finish_time: Date;
  info: string;
  release_date: Date;
  event_typeId: number;
  human_categoryId: number;
  venueId: number;
  langId: number;
}

@Table({ tableName: "event" })
export class Event extends Model<Event, IEventAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  photo: string;

  @Column({
    type: DataType.DATE,
  })
  start_date: Date;

  @Column({
    type: DataType.DATE,
  })
  start_time: Date;

  @Column({
    type: DataType.DATE,
  })
  finish_date: Date;

  @Column({
    type: DataType.DATE,
  })
  finish_time: Date;

  @Column({
    type: DataType.STRING,
  })
  info: string;

  @Column({
    type: DataType.DATE,
  })
  release_date: Date;


  @ForeignKey(()=>EventType)
  @Column({
    type: DataType.INTEGER,
  })
  event_typeId: number;
  @BelongsTo(()=>EventType)
  eventType:EventType


  @ForeignKey(() => HumanCategory)
  @Column({
    type: DataType.INTEGER,
  })
  human_categoryId: number;
  @BelongsTo(() => HumanCategory)
  humanCategory: HumanCategory;

  @ForeignKey(() => Venue)
  @Column({
    type: DataType.INTEGER,
  })
  venueId: number;
  @BelongsTo(() => Venue)
  venue: Venue[];

  @ForeignKey(() => Lang)
  @Column({
    type: DataType.INTEGER,
  })
  langId: number;
  @BelongsTo(() => Lang)
  lang: Lang;
}
