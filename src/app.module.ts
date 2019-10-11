import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { TypegooseModule } from 'nestjs-typegoose';

/**
 * @是一个装饰器，可以理解为下面的class可以是个类可以是方法可以是个参数也可以是是变量，对他进行一个装饰 
 * @Module 代表下面这个是个模块
 */
@Module({
  //可以导入某些模块
  imports: [
    //导入Typegoose模块连接数据库
    TypegooseModule.forRoot("mongodb://localhost:27017/nestjs-blog-api",{
      useNewUrlParser: true
    }),
    PostsModule
  ],
  //相当于express下的router路由
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
