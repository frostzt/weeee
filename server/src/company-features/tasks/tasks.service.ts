import { EntityRepository } from '@mikro-orm/knex';
import { InjectRepository } from '@mikro-orm/nestjs';
import { BadRequestException, Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Company } from '../../users/entities/company.entity';
import { User } from '../../users/entities/users.entity';
import { Task } from './entities/tasks.entity';
import TaskStatus from './enums/tasksStatus.enum';
import { createTaskInput } from './inputs/createTask.input';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private tasksRepository: EntityRepository<Task>,
  ) {}

  // Get all tasks based on current user
  async getMyTasks(entity: User) {
    const tasks = await this.tasksRepository.find({ assignedTo: entity.id });
    return tasks;
  }

  // Create a task by a company
  async createTask(entity: Company, data: createTaskInput): Promise<Task> {
    if (entity instanceof Company) {
      const { title, description, assignedTo } = data;

      const task = this.tasksRepository.create({
        id: uuidv4(),
        title,
        description,
        assignedTo,
        createdByCompany: entity.id,
      });

      this.tasksRepository.persistAndFlush(task);
      return task;
    }

    throw new BadRequestException('Only a company can create Tasks!');
  }

  // Update task status
  async updateTaskStatus(entity: User, status: TaskStatus): Promise<Task> {
    const { id } = entity;

    const task = await this.tasksRepository.findOne({ assignedTo: id });
    if (!task) {
      throw new BadRequestException('This task does not exist!');
    }

    task.status = status;
    await this.tasksRepository.persistAndFlush(task);

    return task;
  }
}
