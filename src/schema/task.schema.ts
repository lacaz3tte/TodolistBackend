import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
export type TaskDocument = Task & Document
@Schema()
export class Task {
  @Prop()
  key: number
  @Prop()
  data:string
  @Prop()
  date: number
  @Prop()
  updated: number
}
export const TaskSchema = SchemaFactory.createForClass(Task)