import { Module } from '@nestjs/common';
import { AnnouncementsService } from './announcements.service';
import { AnnouncementsResolver } from './announcements.resolver';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Announcements } from './entities/announcements.entity';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from '../../users/users.module';

@Module({
  imports: [
    ConfigModule,
    MikroOrmModule.forFeature([Announcements]),
    UsersModule,
  ],
  providers: [AnnouncementsService, AnnouncementsResolver],
})
export class AnnouncementsModule {}
