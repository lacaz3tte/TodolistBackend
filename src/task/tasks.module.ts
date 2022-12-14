import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskController } from 'src/task/task.controller';
import { TaskService } from 'src/task/task.service';
import { Task, TaskSchema } from 'src/schema/task.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }])], 
  controllers: [TaskController],
  providers: [TaskService],
})
export class TasksModule {}