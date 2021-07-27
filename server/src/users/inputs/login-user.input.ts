import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsString } from 'class-validator';

@InputType()
export class LoginUserInput {
  @IsString()
  @Field()
  password: string;

  @IsString()
  @IsEmail()
  @Field()
  email: string;
}
