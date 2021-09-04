import { Module } from '@nestjs/common';
import { AnnouncementsService } from './announcements.service';
import { AnnouncementsResolver } from './announcements.resolver';

@Module({
  providers: [AnnouncementsService, AnnouncementsResolver],
})
export class AnnouncementsModule {}
