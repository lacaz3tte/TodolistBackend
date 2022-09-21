import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from 'src/schema/task.schema';
import { postDTO } from 'src/DTO/postDTO';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Task.name) private readonly taskModel: Model<TaskDocument>,
  ) {}

  get()  {
    return this.taskModel.find().exec();
  }

  async post(post:postDTO) {
    const createdTask = await this.taskModel.create(post)
    return createdTask
  }

  async delete(key1:number){
    const deletedTask = await this.taskModel
      .findOneAndDelete({ key: key1 })
      .exec();
    return deletedTask
  }

  async postDrag(data){
    const postDragTask = await this.taskModel
      .deleteMany()
      .then(()=>{
        this.taskModel.insertMany(data)
      }) 
    return postDragTask
  }

  async put(key:number,data:string,updated:number){
    const updateTask = await this.taskModel.findOneAndUpdate(
      {key:key},{data:data,updated:updated}
    ).exec()
    return updateTask
  }


}


/* let arr = [
   {
    key:1,
    data:'Make homework',
    date:1485388800000,
    updated:-1
  },{
    key:2,
    data:'Clean room',
    date:1588291200000,
    updated:1660262400000
  },{
    key:3,
    data:'Do smth',
    date:1581638400000,
    updated:-1
  },{
    key:4,
    data:'Cook dinner',
    date:1660262400000,
    updated:-1
  },{
    key:5,
    data:'Play computer',
    date:1660996200000,
    updated:-1
  } 
]  */