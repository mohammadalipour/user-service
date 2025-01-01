import { Injectable } from '@nestjs/common';
import { UserService } from './user/user.service';
import { User } from './user/user.entity';
import { UUID } from 'crypto';

@Injectable()
export class AppService {
  constructor(private userService: UserService) {}
  async getHello(userId: UUID): Promise<string> {
    const user: User = await this.userService.findOneById(userId);
    return `Hello ${user.firstName}!`;
  }
}