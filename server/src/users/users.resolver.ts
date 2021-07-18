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
    return {
      id: 'some-random-id',
      name: 'Sourav',
      email: 'test@test.com',
      createdAt: new Date(),
      updatedAt: new Date(),
      age: null,
    };
  }

  // Mutations
  @Mutation(() => UsersType)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    const { name, age, email } = createUserInput;
    return this.usersService.createUser(name, age, email);
  }
}
