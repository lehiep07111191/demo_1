import { BadRequestException, Injectable } from '@nestjs/common';
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
        return await this.repository.create(dto)
    }

    async findAll(query) {
        const _query = query 
        return await this.repository.findAll(_query)
    }
}
