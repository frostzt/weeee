import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class LoginUserInput {
  @IsString()
  @Field()
  password: string;

  @IsString()
  @Field()
  username: string;
}
