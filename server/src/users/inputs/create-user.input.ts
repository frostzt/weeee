import { Field, InputType, Int } from '@nestjs/graphql';
import { IsEmail, IsOptional, MinLength } from 'class-validator';

@InputType()
export class CreateUserInput {
  @MinLength(1)
  @Field()
  name: string;

  @IsEmail()
  @Field()
  email: string;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  age?: number;
}
