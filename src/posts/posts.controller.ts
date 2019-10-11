import { Controller, Get, Post, Param, Body, Query, Put, Delete } from '@nestjs/common';
import { ApiUseTags, ApiOperation, ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator'
import { InjectModel } from 'nestjs-typegoose';
import {Post as PostSchema} from './post.model';
import { ModelType } from '@typegoose/typegoose/lib/types';

class CreatePostDto {
  @ApiModelProperty({ description: '帖子标题', example: '帖子标题default' })
  @IsNotEmpty({message: '请填写标题'})
  title: string
  @ApiModelProperty({ description: '帖子文章', example: '帖子文章default' })
  content: string
}

//路由前缀
@Controller('posts')
@ApiUseTags('帖子')
export class PostsController {
  //使用依赖注入Post模型
  constructor(
    @InjectModel(PostSchema) private readonly postModel: ModelType<PostSchema>
  ){ }

  @Get()
  //给API区分
  @ApiOperation({ title: '帖子列表' })
  async index() {
    return await this.postModel.find();
  }

  @Post()
  @ApiOperation({ title: '创建帖子' })
  //使用参数装饰器获取请求体数据,从get中获取参数
  //create(@Body() body,@Query() query, @Param() params){
  async create(@Body() createPostDto: CreatePostDto) {
    await this.postModel.create(createPostDto);
    return {
      success: true
    }
  }

  @Get(':id')
  @ApiOperation({ title: '帖子详情' })
  async detail(@Param('id') id: string) {
    return await this.postModel.findById(id);
  }

  @Put(':id')
  @ApiOperation({ title: '编辑帖子' })
  async updata(@Param('id') id: string, @Body() updataPostDto: CreatePostDto) {
    await this.postModel.findByIdAndUpdate(id, updataPostDto);
    return {
      success: true
    }
  }

  @Delete(':id')
  @ApiOperation({ title: '删除帖子' })
  async remove(@Param('id') id: string) {
    await this.postModel.findByIdAndDelete(id);
    return {
      success: true
    }
  }
}
