import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { postDTO } from 'src/DTO/postDTO'
export type ListDocument = List & Document
@Schema()
export class List {
  @Prop()
  key: number
  @Prop()
  name: string
  @Prop()
  pages: Array<postDTO>
}
export const ListSchema = SchemaFactory.createForClass(List)