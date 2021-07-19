import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 3000;

  // Global Pipes
  app.useGlobalPipes(new ValidationPipe());

  // Server
  await app.listen(PORT);
}
bootstrap();
