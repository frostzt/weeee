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
import { LoginUserInput } from './inputs/login-user.input';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: EntityRepository<User>,
    private jwtService: JwtService,
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

  async getUser(user: User): Promise<User> {
    return user;
  }

  async signIn(loginData: LoginUserInput): Promise<string> {
    const { email, password } = loginData;
    const user = await this.usersRepository.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const payload = { email };
      const accessToken = this.jwtService.sign(payload);
      return accessToken;
    } else {
      throw new UnauthorizedException(
        'The password or username is  incorrect!;',
      );
    }
  }
}
