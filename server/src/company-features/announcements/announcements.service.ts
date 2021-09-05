import { EntityRepository } from '@mikro-orm/knex';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';
import { Announcements } from './entities/announcements.entity';
import { createAnnouncement } from './inputs/create-announcement.input';

@Injectable()
export class AnnouncementsService {
  constructor(
    @InjectRepository(Announcements)
    private announcementsRepository: EntityRepository<Announcements>,
  ) {}

  // Create an announcement
  async createAnnouncement(data: createAnnouncement): Promise<Announcements> {
    const { title, description } = data;

    const announcement = this.announcementsRepository.create({
      id: v4(),
      title,
      description,
    });
    this.announcementsRepository.persistAndFlush(announcement);

    return announcement;
  }
}
