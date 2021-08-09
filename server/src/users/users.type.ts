import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
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

  @Field(() => Int, { nullable: true })
  age?: number;

  @Field()
  username: string;

  @Field()
  picture: string;

  @Field()
  bio: string;

  password: string;
}
