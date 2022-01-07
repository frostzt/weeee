import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from '../../authUtils/currentUser.decorator';
import { GqlAuthGuard } from '../../authUtils/gqlauthguard';
import { Company } from '../../users/entities/company.entity';
import { User } from '../../users/entities/users.entity';
import { createTaskInput } from './inputs/createTask.input';
import { UpdateTaskStatusInput } from './inputs/updateTaskStatus.input';
import { TasksService } from './tasks.service';
import { TasksType } from './tasks.type';

@Resolver()
export class TasksResolver {
  constructor(private taskService: TasksService) {}

  @Query(() => [TasksType])
  @UseGuards(GqlAuthGuard)
  getAllTasks(@CurrentUser() entity: Company) {
    return this.taskService.getAllTasks(entity);
  }

  @Query(() => [TasksType])
  @UseGuards(GqlAuthGuard)
  getMyTasks(@CurrentUser() entity: User) {
    return this.taskService.getMyTasks(entity);
  }

  @Mutation(() => TasksType)
  @UseGuards(GqlAuthGuard)
  createTask(
    @CurrentUser() entity: Company,
    @Args('data') data: createTaskInput,
  ) {
    return this.taskService.createTask(entity, data);
  }

  @Mutation(() => TasksType)
  @UseGuards(GqlAuthGuard)
  updateTaskStatus(
    @CurrentUser() entity: User,
    @Args('updateInput') data: UpdateTaskStatusInput,
  ) {
    return this.taskService.updateTaskStatus(entity, data);
  }
}
