import { Controller, Get } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
//import { AppService } from './app.service';

//代表一个控制器
//使用依赖注入 appService 把AppService注入进来
@Controller()
// 再用一个装饰器区分他是根路径下的Api
@ApiUseTags('默认')
export class AppController {
  //constructor(private readonly appService: AppService) {}

  //表明这是一个Get请求方法，：string表达返回值是一个string
  @Get()
  /*  getHello(): string {
     return this.appService.getHello();
   } */
  index() {
    return 'index';
  }
}
