import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module'; //根模块

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(5000);
}
bootstrap();


/** 
 * 
*/