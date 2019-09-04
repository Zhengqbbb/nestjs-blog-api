import { Controller, Get, Post, Param } from '@nestjs/common';

//路由前缀
@Controller('posts')
export class PostsController {
  @Get()
  index() {
    return [];
  }

  @Post()
  create(){
    return {
      success: true
    }
  }

  @Get(':id')
  detail(){
    return {
      id: 1,
      title: 'qbneben hello'
    }
  }
}
