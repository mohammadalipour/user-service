import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
      @InjectRepository(User) private userRepository: Repository<User>,
    ) {}

    async createUser(email: string, password: string) {
        const user = this.userRepository.create({ email, password });
        return this.userRepository.save(user);
    }

    async findUser(email: string) {
        return this.userRepository.findOne({ where: { email } });
    }
}
