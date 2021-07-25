import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const PORT = configService.get('APP_PORT') || 5000;

  // Global Pipes
  app.useGlobalPipes(new ValidationPipe());

  // Server
  await app.listen(PORT);
}
bootstrap();
