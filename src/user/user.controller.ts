import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { AuthenticatedGuard } from 'src/auth/guards/authenticated.guard';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private readonly service: UserService
    ) { }

    @UseGuards(AuthenticatedGuard)
    @Get('')
    async findAll(@Query() query) {
        return await this.service.findAll(query)
    }

    @Get('profile/:id')
    async findById(@Param() param) {
        return await this.service.findById(param.id)
    }

    @Post('')
    async createUser(@Body() dto: any) {
        return await this.service.createrUser(dto)
    }
    
    
}
