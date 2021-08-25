import { Field, InputType, Int } from '@nestjs/graphql';
import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

@InputType()
export class UpdateUserInput {
  @IsOptional()
  @IsString()
  @MinLength(1)
  @Field(() => String, { nullable: true })
  name?: string;

  @IsOptional()
  @IsEmail()
  @Field(() => String, { nullable: true })
  email?: string;

  @IsOptional()
  @MinLength(4)
  @MaxLength(16)
  @IsString()
  @Field(() => String, { nullable: true })
  username?: string;

  @IsOptional()
  @IsNumber()
  @Field(() => Int, { nullable: true })
  age?: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  @Field(() => String, { nullable: true })
  bio?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  companyOrOrganization?: string;
}
