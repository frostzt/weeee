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
import { FullUser, UsersType } from '../users.type';
import { CreateCompanyInput } from '../inputs/create-company.input';
import { CompanyType } from '../company.type';
import { CompanyWToken } from '../types/CompanyWToken';
import { Company } from '../entities/company.entity';

@Resolver()
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  // Queries
  @Query(() => UserWToken)
  signIn(@Args('loginData') loginData: LoginUserInput) {
    return this.usersService.signIn(loginData, false);
  }

  @Query(() => CompanyWToken)
  signInCompany(@Args('loginData') loginData: LoginUserInput) {
    return this.usersService.signIn(loginData, true);
  }

  @Query(() => [CompanyType])
  getAllCompanies() {
    return this.usersService.getAllCompanies();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Query(() => FullUser)
  @UseGuards(GqlAuthGuard)
  getUser(@CurrentUser() user: User) {
    return this.usersService.getUser(user);
  }

  @Query(() => [FullUser])
  @UseGuards(GqlAuthGuard)
  getAllEmployees(@CurrentUser() company: Company) {
    return this.usersService.getAllEmployees(company);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Query(() => CompanyType)
  @UseGuards(GqlAuthGuard)
  getCompany(@CurrentUser() company: Company) {
    return this.usersService.getCompany(company);
  }

  // Mutations
  @Mutation(() => String)
  signUp(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.createUser(createUserInput);
  }

  @Mutation(() => CompanyType)
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
    return this.usersService.updateUser<User>(updateUserInput, user);
  }

  @Mutation(() => CompanyType)
  @UseGuards(GqlAuthGuard)
  updateCompany(
    @CurrentUser() company: Company,
    @Args('updateData') updateCompanyInput: UpdateUserInput,
  ) {
    return this.usersService.updateUser<Company>(updateCompanyInput, company);
  }
}
