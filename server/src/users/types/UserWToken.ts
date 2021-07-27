import { Field, ObjectType } from '@nestjs/graphql';
import { UsersType } from '../users.type';

@ObjectType()
export class UserWToken {
  @Field()
  accessToken: string;

  @Field()
  user: UsersType;
}
