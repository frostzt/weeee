import { EntityRepository } from '@mikro-orm/knex';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { Company } from '../../users/entities/company.entity';
import { User } from '../../users/entities/users.entity';
import { Task } from './entities/tasks.entity';
import CreateTaskInput from './inputs/createTask.input';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: EntityRepository<Task>,
  ) {}

  // Get all tasks based on current user
  async getMyTasks(entity: User) {
    const tasks = await this.tasksRepository.find({ assignedTo: entity.id });
    return tasks;
  }

  async createTask(entity: Company, data: CreateTaskInput) {
    const { title, description, assignedTo } = data;
  }
}
