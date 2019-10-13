import { Controller, Get, Post, Param, Body, Query, Put, Delete } from '@nestjs/common';
import { ApiUseTags, ApiOperation, ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator'
import { InjectModel } from 'nestjs-typegoose';
import {Post as PostSchema} from './post.model';
import { ModelType } from '@typegoose/typegoose/lib/types';

import { Crud } from 'nestjs-mongoose-crud';
class CreatePostDto {
  @ApiModelProperty({ description: '帖子标题', example: '帖子标题default' })
  @IsNotEmpty({message: '请填写标题'})
  title: string
  @ApiModelProperty({ description: '帖子文章', example: '帖子文章default' })
  content: string
}

//路由前缀
@Crud({
  model: PostSchema,
  routes: {
    find: {
      decorators: [
        ApiOperation({title: '帖子列表'})
      ]
    },
    create: {
      dto: CreatePostDto
    }
  }
})
@Controller('posts')
@ApiUseTags('帖子')
export class PostsController {
  //使用依赖注入Post模型
  constructor(
    @InjectModel(PostSchema) private readonly model: ModelType<PostSchema>
  ){ }
}
