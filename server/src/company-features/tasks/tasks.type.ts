import { Field, ObjectType } from '@nestjs/graphql';

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
}
