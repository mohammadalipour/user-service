import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('register')
  async register(@Body() body: { email: string; password: string; name: string;}) {
    return this.userService.createUser(body.email, body.password, body.name);
  }
}
