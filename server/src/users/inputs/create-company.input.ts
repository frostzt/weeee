import { Field, InputType } from '@nestjs/graphql';
import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

@InputType()
export class CreateCompanyInput {
  @MinLength(1)
  @IsString()
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
}
