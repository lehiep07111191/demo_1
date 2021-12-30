import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from '../dto/user.dto';
import { User } from '../interfaces/user.inteface';
import * as bcrypt from 'bcrypt';



@Injectable()
export class UserRepository {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) {}

  async create(dto: CreateUserDto) {
      const salt = 12
      const hash = await bcrypt.hash(dto.password, salt)
      dto.password = hash
    return await this.userModel.create(dto).then(res => {
        return res
    }).catch(e => console.log(e)) ;
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }
  async findOne(query): Promise<User> {
    return await this.userModel.findOne(query)
  }
}