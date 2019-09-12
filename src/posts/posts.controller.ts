import { Controller, Get, Post, Param, Body, Query, Put, Delete } from '@nestjs/common';
import { ApiUseTags, ApiOperation, ApiModelProperty } from '@nestjs/swagger';
import { PostModel } from './post.model';


class CreatePostDto {
  @ApiModelProperty({ description: '帖子标题' })
  title: string
  @ApiModelProperty({ description: '帖子文章' })
  content: string
}

//路由前缀
@Controller('posts')
@ApiUseTags('帖子')
export class PostsController {
  @Get()
  //给API区分
  @ApiOperation({ title: '帖子列表' })
  async index() {
    return await PostModel.find()
  }

  @Post()
  @ApiOperation({ title: '创建帖子' })
  //使用参数装饰器获取请求体数据,从get中获取参数
  //create(@Body() body,@Query() query, @Param() params){
  create(@Body() body: CreatePostDto) {
    return {
      success: true,
      body
    }
  }

  @Get(':id')
  @ApiOperation({ title: '帖子详情' })
  detail(@Param('id') id: string) {
    return {
      id: 1,
      title: 'qbneben hello'
    }
  }

  @Put(':id')
  @ApiOperation({ title: '编辑帖子' })
  updata(@Param('id') id: string, @Body() body: CreatePostDto) {
    return {
      success: true
    }
  }

  @Delete('id')
  @ApiOperation({ title: '删除帖子' })
  remove(@Param('id') id: string) {
    return {
      success: true
    }
  }
}
