import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import passport = require('passport');
import * as session from 'express-session';
import flash = require('connect-flash');
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import fastifyCookie from 'fastify-cookie';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(
    session({
      secret: 'nest cats',
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser());
  app.use(passport.initialize());
  app.use(passport.session());
  app.enableCors();
  app.use(flash());
  
  await app.listen(3001);
}
bootstrap();
