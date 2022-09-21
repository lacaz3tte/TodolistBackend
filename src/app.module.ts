import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose"
import { ListModule } from './list/list.module';
import { TasksModule } from './task/tasks.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/tasksdb'), 
    TasksModule, 
    ListModule
  ],
})
export class AppModule {}
