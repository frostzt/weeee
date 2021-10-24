import { EntityRepository } from '@mikro-orm/knex';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { Company } from 'src/users/entities/company.entity';
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
  async createAnnouncement(
    data: createAnnouncement,
    company: Company,
  ): Promise<Announcements> {
    const { title, description } = data;

    console.log(company);

    const announcement = this.announcementsRepository.create({
      id: v4(),
      title,
      description,
      // companyOrOrganization:
    });
    // this.announcementsRepository.persistAndFlush(announcement);

    return announcement;
  }
}
