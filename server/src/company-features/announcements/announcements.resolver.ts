import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'src/authUtils/currentUser.decorator';
import { GqlAuthGuard } from 'src/authUtils/gqlauthguard';
import { Company } from 'src/users/entities/company.entity';
import { AnnouncementsService } from './announcements.service';
import { AnnouncementsType } from './announcements.type';
import { createAnnouncement } from './inputs/create-announcement.input';

@Resolver()
export class AnnouncementsResolver {
  constructor(private announcementsService: AnnouncementsService) {}

  // @Query(() => [AnnouncementsType])
  // getAllAnnouncements() {}

  // Mutations
  @Mutation(() => AnnouncementsType)
  @UseGuards(GqlAuthGuard)
  createAnnouncement(
    @Args('data') data: createAnnouncement,
    @CurrentUser() company: Company,
  ) {
    return this.announcementsService.createAnnouncement(data, company);
  }
}
