import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from '../../authUtils/currentUser.decorator';
import { GqlAuthGuard } from '../../authUtils/gqlauthguard';
import { Company } from '../../users/entities/company.entity';
import { User } from '../../users/entities/users.entity';
import CreateTaskInput from './inputs/createTask.input';
import { TasksService } from './tasks.service';
import { TasksType } from './tasks.type';

@Resolver()
export class TasksResolver {
  constructor(private taskService: TasksService) {}

  @Query(() => [TasksType])
  @UseGuards(GqlAuthGuard)
  getMyTasks(@CurrentUser() entity: User) {
    return this.taskService.getMyTasks(entity);
  }

  @Mutation(() => TasksType)
  @UseGuards(GqlAuthGuard)
  createTask(
    @Args('data') data: CreateTaskInput,
    @CurrentUser() entity: Company,
  ) {
    return this.taskService.createTask(entity, data);
  }
}
