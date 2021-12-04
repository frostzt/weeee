import { Field, InputType } from '@nestjs/graphql';
import { IsString, MinLength } from 'class-validator';
import TaskStatus from '../enums/tasksStatus.enum';

@InputType()
export class UpdateTaskStatusInput {
  @Field()
  @IsString()
  @MinLength(1)
  status: TaskStatus;

  @Field()
  @IsString()
  @MinLength(1)
  task: string;
}
