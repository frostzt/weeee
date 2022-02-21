import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { CompanyType } from './company.type';

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
  accountType: string;

  @Field()
  picture: string;

  @Field(() => String, { nullable: true })
  bio?: string;

  password: string;
}

@ObjectType()
export class FullUser {
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
  accountType: string;

  @Field(() => Int, { nullable: true })
  age?: number;

  @Field()
  username: string;

  @Field()
  picture: string;

  @Field(() => String, { nullable: true })
  bio?: string;

  @Field(() => CompanyType)
  companyOrOrganization?: string;

  password: string;
}
