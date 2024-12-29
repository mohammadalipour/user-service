import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/user.entity'; // Assuming a UsersModule is created

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {}

    async generateToken(user: User) {
        const payload = { username: user.email, sub: user.id };
        return {
            accessToken: this.jwtService.sign(payload),
        };
    }
}
