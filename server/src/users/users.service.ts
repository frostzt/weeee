import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateUserInput } from './inputs/create-user.input';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: EntityRepository<User>,
  ) {}

  async createUser(createUserInput: CreateUserInput): Promise<User> {
    const { name, email, age, password, username } = createUserInput;
    const user = this.usersRepository.create({
      id: uuidv4(),
      username,
      password,
      name,
      email,
      age,
    });

    this.usersRepository.persistAndFlush(user);
    return user;
  }
}
