import { Controller, Get, Post, Param } from '@nestjs/common';
import { ApiUseTags, ApiOperation } from '@nestjs/swagger';

//路由前缀
@Controller('posts')
@ApiUseTags('帖子')
export class PostsController {
  @Get()
  //给API区分
  @ApiOperation({title: '显示博客列表'})
  index() {
    return [
      {id: 1, title: 'helle word 博客'},
      {id: 1, title: 'helle word 博客'},
      {id: 1, title: 'helle word 博客'},
      {id: 1, title: 'helle word 博客'},
      {id: 1, title: 'helle word 博客'},
      {id: 1, title: 'helle word 博客'}
    ];
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
