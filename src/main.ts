import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
//import { json } from 'stream/consumers';
import {json} from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });
  app.use(json({limit: '60mb'}))
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Documentacion api bank bakend')
    .setDescription('Api para la creacion de productos')
    .addTag('savings')
    .addTag('auth')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);

  await app.listen(3002);
}
bootstrap();
