import { Injectable } from '@nestjs/common';
import { UserService } from './user/user.service';
import { UUID } from 'crypto';
import { UserProfileDTO } from './user/dto/user-profile-response.dto';

@Injectable()
export class AppService {
  constructor(private userService: UserService) {}
  async getHello(userId: UUID): Promise<string> {
    const userProfile: UserProfileDTO = await this.userService.findOneById(userId);
    return `Hello ${userProfile.firstName}!`;
  }
}