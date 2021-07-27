import {
  ClassSerializerInterceptor,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'src/authUtils/currentUser.decorator';
import { GqlAuthGuard } from 'src/authUtils/gqlauthguard';
import { CreateUserInput } from './inputs/create-user.input';
import { LoginUserInput } from './inputs/login-user.input';
import { User } from './users.entity';
import { UsersService } from './users.service';
import { UsersType } from './users.type';

@Resolver()
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  // Queries
  @Query(() => String)
  signIn(@Args('loginData') loginData: LoginUserInput) {
    return this.usersService.signIn(loginData);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Query(() => UsersType)
  @UseGuards(GqlAuthGuard)
  getUser(@CurrentUser() user: User) {
    return this.usersService.getUser(user);
  }

  // Mutations
  @Mutation(() => String)
  signUp(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.createUser(createUserInput);
  }
}
