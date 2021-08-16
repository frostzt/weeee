import {
  ClassSerializerInterceptor,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'src/authUtils/currentUser.decorator';
import { GqlAuthGuard } from 'src/authUtils/gqlauthguard';
import { CreateUserInput } from '../inputs/create-user.input';
import { LoginUserInput } from '../inputs/login-user.input';
import { UpdateUserInput } from '../inputs/update-user.input';
import { UserWToken } from '../types/UserWToken';
import { User } from '../entities/users.entity';
import { UsersService } from '../users.service';
import { UsersType } from '../users.type';
import { CreateCompanyInput } from '../inputs/create-company.input';

@Resolver()
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  // Queries
  @Query(() => UserWToken)
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

  @Mutation(() => String)
  signUpCompany(
    @Args('createCompanyInput') createCompanyInput: CreateCompanyInput,
  ) {
    return this.usersService.createCompany(createCompanyInput);
  }

  @Mutation(() => UsersType)
  @UseGuards(GqlAuthGuard)
  updateUser(
    @CurrentUser() user: User,
    @Args('updateData') updateUserInput: UpdateUserInput,
  ) {
    return this.usersService.updateUser(updateUserInput, user);
  }
}
