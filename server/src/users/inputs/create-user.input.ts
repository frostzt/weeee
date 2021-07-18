import { Field, InputType, Int } from '@nestjs/graphql';
import {
  IsEmail,
  IsOptional,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

@InputType()
export class CreateUserInput {
  @MinLength(1)
  @Field()
  name: string;

  @IsEmail()
  @Field()
  email: string;

  @MinLength(8)
  @MaxLength(32)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'The password must be between 8 and 32, with uppercase, lowercase, and special characters!',
  })
  @Field()
  password: string;

  @MinLength(1)
  @MaxLength(16)
  @Field()
  username: string;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  age?: number;
}
