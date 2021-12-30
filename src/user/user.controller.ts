import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly service: UserService) {

    }

    @Post()
    async createUser(@Body() dto: any) {
        return this.service.createrUser(dto)
    }
}
