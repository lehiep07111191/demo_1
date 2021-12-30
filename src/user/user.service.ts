import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { UserRepository } from './repository/user.repository';

@Injectable()
export class UserService {
    constructor(
        private readonly repository: UserRepository
    ){}

    async createrUser(dto: any) {
        const oldModel = this.repository.findOne({email: dto.email})
        if(oldModel) {
            throw new BadRequestException("Email đã tồn tại trong hệ thống") 
        }
        return this.repository.create(dto)
    }
}
