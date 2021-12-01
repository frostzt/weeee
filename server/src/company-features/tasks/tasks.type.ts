import { Field, ObjectType } from '@nestjs/graphql';
import TaskStatus from './enums/tasksStatus.enum';

@ObjectType()
export class TasksType {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  description: string;

  @Field()
  status: TaskStatus;
}
