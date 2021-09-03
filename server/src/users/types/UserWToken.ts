import { Field, ObjectType } from '@nestjs/graphql';
import { FullUser } from '../users.type';

@ObjectType()
export class UserWToken {
  @Field()
  accessToken: string;

  @Field()
  user: FullUser;
}
