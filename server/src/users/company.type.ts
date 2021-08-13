import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
export class CompanyType {
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
}
