import { Module } from '@nestjs/common';
import { ListController } from './list.controller';
import { ListService } from './list.service';
import { MongooseModule } from '@nestjs/mongoose';
import { List, ListSchema} from 'src/schema/list.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: List.name, schema: ListSchema }])], 
  controllers: [ListController],
  providers: [ListService],
})
export class ListModule {}