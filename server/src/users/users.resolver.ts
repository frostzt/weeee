import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from './inputs/create-user.input';
import { LoginUserDTO } from './inputs/login-user.dto';
import { UsersService } from './users.service';
import { UsersType } from './users.type';

@Resolver()
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  // Queries
  @Query(() => UsersType)
  signIn(@Args('loginData') loginData: LoginUserDTO) {
    return this.usersService.signIn(loginData);
  }

  // Mutations
  @Mutation(() => String)
  signUp(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.createUser(createUserInput);
  }
}
