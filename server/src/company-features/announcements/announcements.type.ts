import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AnnouncementsType {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  description: string;
}

@ObjectType()
export class DeletedAnnouncement {
  @Field()
  status: string;
}
