import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: EntityRepository<User>,
  ) {}

  async createUser(name: string, age: number, email: string): Promise<User> {
    const user = this.usersRepository.create({
      id: uuidv4(),
      name,
      email,
      age,
    });

    this.usersRepository.persistAndFlush(user);
    return user;
  }
}
