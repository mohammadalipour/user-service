import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { User } from './user.entity';
import { UUID } from 'crypto';
import { UserProfileDTO } from './dto/user-profile-response.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  findOneByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOneBy({ email });
  }

  async findOneById(id: UUID): Promise<UserProfileDTO> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new BadRequestException('User not found');
    }
    const { id: userId, email, firstName, lastName } = user;
    return { id: userId, email, firstName, lastName };
  }

  create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  update(userId: UUID, userInformation: Partial<User>): Promise<UpdateResult> {
    return this.userRepository.update(userId, userInformation);
  }
}
