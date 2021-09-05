import { Module } from '@nestjs/common';
import { AnnouncementsService } from './announcements.service';
import { AnnouncementsResolver } from './announcements.resolver';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Announcements } from './entities/announcements.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule, MikroOrmModule.forFeature([Announcements])],
  providers: [AnnouncementsService, AnnouncementsResolver],
})
export class AnnouncementsModule {}
