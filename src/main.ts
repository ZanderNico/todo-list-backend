import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
    const corsOptions: CorsOptions = {
    origin: 'http://localhost:5173', //Palitan niyo ng mismo react url niyo yung localhost chuchu
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS','PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'], 
    preflightContinue: false,
    optionsSuccessStatus: 200,
    credentials: true,
  };

  app.enableCors(corsOptions);
  await app.listen(3001);
}
bootstrap();
