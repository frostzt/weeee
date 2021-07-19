import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from './inputs/create-user.input';
import { UsersService } from './users.service';
import { UsersType } from './users.type';

@Resolver()
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  // Queries
  @Query(() => UsersType)
  getUser() {
    return 'this is good';
  }

  // Mutations
  @Mutation(() => String)
  signUp(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.createUser(createUserInput);
  }
}
