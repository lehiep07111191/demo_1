import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { userProviders } from './providers/user.provider';
import { UserRepository } from './repository/user.repository';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [
    UserService, 
    UserRepository,
    ...userProviders
  ],
  exports: [UserRepository]

})
export class UserModule {}
