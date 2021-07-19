import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { BadRequestException, Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateUserInput } from './inputs/create-user.input';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: EntityRepository<User>,
  ) {}

  async createUser(createUserInput: CreateUserInput): Promise<string> {
    const { name, email, age, password, username } = createUserInput;

    // Check if username already exists
    const usernameExists = await this.usersRepository.findOne({ username });
    if (usernameExists) {
      throw new BadRequestException('This username is already taken!');
    }

    const usermailExists = await this.usersRepository.findOne({ email });
    if (usermailExists) {
      throw new BadRequestException('This mail is taken, please sign in!');
    }

    const user = this.usersRepository.create({
      id: uuidv4(),
      username,
      password,
      name,
      email,
      age,
    });

    await this.usersRepository.persistAndFlush(user);
    return 'Success';
  }
}
