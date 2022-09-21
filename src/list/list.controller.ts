import { Body, Controller, Get, Post,Delete, Param} from '@nestjs/common';
import { ListService } from './list.service';

@Controller()
export class ListController {
  constructor(private readonly listService: ListService) {}

  @Get('/list')
  get() {
    return this.listService.get();
  }

  @Post('/list')
  async post(@Body() body){
    this.listService.post(body)
  }

  @Post('/list/drag')
  async postDrag(@Body() body){
    this.listService.postDrag(body)
  }


  @Delete('list/:key')
  delete(@Param('key') key){
   /*  console.log(key);
    console.log(typeof(key)); */
    
    this.listService.delete(Number(key))
  }
}