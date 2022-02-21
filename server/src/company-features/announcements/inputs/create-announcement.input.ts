import { Field, InputType } from '@nestjs/graphql';
import { IsString, MinLength } from 'class-validator';

@InputType()
export class createAnnouncement {
  @MinLength(1)
  @IsString()
  @Field()
  title: string;

  @MinLength(1)
  @IsString()
  @Field()
  description?: string;
}
