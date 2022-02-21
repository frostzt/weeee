import { Field, ObjectType } from '@nestjs/graphql';
import { CompanyType } from '../company.type';

@ObjectType()
export class CompanyWToken {
  @Field()
  accessToken: string;

  @Field()
  company: CompanyType;
}
