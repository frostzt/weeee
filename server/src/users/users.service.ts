import { InjectRepository } from '@mikro-orm/nestjs';
import { BadRequestException, Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateUserInput } from './inputs/create-user.input';
import { User } from './users.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersRepository)
    private readonly usersRepository: UsersRepository,
  ) {}

  async createUser(createUserInput: CreateUserInput): Promise<User> {
    const { name, email, age, password, username } = createUserInput;

    const userExists = this.usersRepository.find({ username });
    if (userExists) {
      throw new BadRequestException('This username is already taken!');
    }

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
