import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 添加全局前缀
  app.setGlobalPrefix('api/v1');
  await app.listen(3000);
}
bootstrap();
