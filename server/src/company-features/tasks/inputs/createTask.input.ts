import { Field, InputType } from '@nestjs/graphql';
import { IsString, MinLength } from 'class-validator';

@InputType()
export class createTaskInput {
  @MinLength(1)
  @IsString()
  @Field()
  title: string;

  @MinLength(1)
  @IsString()
  @Field()
  description: string;

  @MinLength(1)
  @IsString()
  @Field()
  assignedTo: string;
}
