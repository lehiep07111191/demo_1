import { Injectable } from '@nestjs/common';
import { UserRepository } from '../user/repository/user.repository';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly jwtService: JwtService
    ) {
        
    }

    async validateUser(email, pass): Promise<any> {
        const user = await this.userRepository.findOne({email: email});
        const check = await bcrypt.compare(pass, user.password)
        if (check) {
          const { password, ...result } = user;
          return result;
        }
        return null;
    }
    async login(req: any) {
        const user = await this.userRepository.findOne({email: req.body.email})
        const payload = { user};
        return {
          access_token: this.jwtService.sign(payload),
        };
      }
    
}
