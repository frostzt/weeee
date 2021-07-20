import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateUserInput } from './inputs/create-user.input';
import { User } from './users.entity';
import * as bcrypt from 'bcrypt';
import { LoginUserDTO } from './inputs/login-user.dto';

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

    // Hash the password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = this.usersRepository.create({
      id: uuidv4(),
      username,
      password: hashedPassword,
      name,
      email,
      age,
    });

    await this.usersRepository.persistAndFlush(user);
    return 'success';
  }

  async signIn(loginData: LoginUserDTO): Promise<string> {
    const { username, password } = loginData;
    const user = await this.usersRepository.findOne({ username });

    if (user && (await bcrypt.compare(password, user.password))) {
      return 'success';
    } else {
      throw new UnauthorizedException(
        'The password or username is  incorrect!;',
      );
    }
  }
}
