import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { Post } from './post.model';

@Module({
  //注册模型
  imports: [
    TypegooseModule.forFeature([Post])
  ],
  controllers: [PostsController]
})
export class PostsModule {}
