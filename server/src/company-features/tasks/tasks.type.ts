import { Field, ObjectType } from '@nestjs/graphql';
import { CompanyType } from '../../users/company.type';
import { UsersType } from '../../users/users.type';

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
  createdBy: CompanyType;

  @Field()
  assignedTo: UsersType;
}
