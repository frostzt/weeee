import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('User')
export class UsersType {
  @Field(() => ID)
  id: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  age: number;
}
