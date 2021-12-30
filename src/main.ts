import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import passport = require('passport');
import * as session from 'express-session';
import flash = require('connect-flash');
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(
    session({
      secret: 'nest cats',
      resave: false,
      saveUninitialized: false,
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());
  
  await app.listen(3000);
}
bootstrap();
