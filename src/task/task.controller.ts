import { Body, Controller, Get, Post,Delete,Put, Query, Param} from '@nestjs/common';
import { TaskService } from './task.service';
import { putDTO } from '../DTO/putDTO';

@Controller()
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  get() {
    
    return this.taskService.get();
  }

  @Post()
  async post(@Body() body){
    this.taskService.post(body)
  }

  @Post('/drag')
  async postDrag(@Body() body){
    this.taskService.postDrag(body)
  }

  @Delete('task/:key')
  delete(@Param('key') key){
    this.taskService.delete(Number(key))
  }

  @Put()
  put(@Query() query:putDTO){
    this.taskService.put(Number(query.key),query.data,query.updated)
  }
  
}
