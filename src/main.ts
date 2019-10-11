import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module'; //根模块

import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //有点类似有express中的中间件
  app.useGlobalPipes(new ValidationPipe())

  const options = new DocumentBuilder()
    .setTitle('NestJs博客api')
    .setDescription('我的第一个NestJs项目')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-test', app, document);

  await app.listen(5000);
}
bootstrap();


/**
 *
*/