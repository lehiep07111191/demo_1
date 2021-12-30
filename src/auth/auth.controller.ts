import { Controller, Post, UseGuards, Request, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private service: AuthService){}
    
    @UseGuards(LocalAuthGuard)
    @Post('/login') 
    async login(@Request() req) {
        return await this.service.login(req)
    }
}
