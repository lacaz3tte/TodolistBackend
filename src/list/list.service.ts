import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { List, ListDocument } from 'src/schema/list.schema';

/* let arr =  [
  {
    name:'Biba',
    pages:[
      {
        data:"Make homework",
        date: 1485388800000,
        key: 1,
        updated: 1662390021424
      }
    ]
  }
] */

@Injectable()
export class ListService {
  constructor(
    @InjectModel(List.name) private readonly listModel: Model<ListDocument>
  ) {}

  get(){
    //this.listModel.find().exec().then(res=>console.log(res))
    return this.listModel.find().exec();
  }

  async delete(key:number){
    const deletedList = await this.listModel.
      findOneAndDelete({key:key}).exec()
    return deletedList
  }

  /* delete(name){
    arr = arr.filter((e)=>e.name!==name)
    console.log(arr);
  } */

  /* post(body) {
    arr.push(body)
  } */

  async post(post) {
    
    const createdTask = await this.listModel.create(post)
    return createdTask
  }

  async postDrag(data){
    console.log(data);
    
    const postDragTask = await this.listModel
      .findOneAndDelete({key:data.key[0]})
      .then(()=>{
        this.listModel.create({key:data.key[0],name:data.key[1],pages:data.tasks})
      }) 
      
      
    return postDragTask
  }
}



