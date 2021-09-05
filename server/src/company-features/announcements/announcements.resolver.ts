import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AnnouncementsService } from './announcements.service';
import { AnnouncementsType } from './announcements.type';
import { createAnnouncement } from './inputs/create-announcement.input';

@Resolver()
export class AnnouncementsResolver {
  constructor(private announcementsService: AnnouncementsService) {}

  // Mutations
  @Mutation(() => AnnouncementsType)
  createAnnouncement(@Args('data') data: createAnnouncement) {
    return this.announcementsService.createAnnouncement(data);
  }
}
