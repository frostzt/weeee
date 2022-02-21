import { EntityRepository } from '@mikro-orm/knex';
import { InjectRepository } from '@mikro-orm/nestjs';
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Company } from '../../users/entities/company.entity';
import { User } from '../../users/entities/users.entity';
import { v4 } from 'uuid';
import { Announcements } from './entities/announcements.entity';
import { createAnnouncement } from './inputs/create-announcement.input';

@Injectable()
export class AnnouncementsService {
  constructor(
    @InjectRepository(Announcements)
    private announcementsRepository: EntityRepository<Announcements>,
  ) {}

  // Get all announcements
  async getAllAnnouncements(currentEntity: User | Company) {
    // Handle if the call by Company
    if (currentEntity instanceof Company) {
      const announcements = await this.announcementsRepository.find({
        companyOrOrganization: currentEntity.id,
      });

      return announcements;
    }

    // Handle if the call is by User
    if (currentEntity instanceof User) {
      const announcements = await this.announcementsRepository.find({
        companyOrOrganization: currentEntity.companyOrOrganization,
      });

      return announcements;
    }

    throw new InternalServerErrorException(
      "Please verify that you're calling the right announcement resolver!",
    );
  }

  // Create an announcement
  async createAnnouncement(
    data: createAnnouncement,
    company: Company,
  ): Promise<Announcements> {
    const { title, description } = data;

    const announcement = this.announcementsRepository.create({
      id: v4(),
      title,
      description,
      companyOrOrganization: company.id,
    });

    this.announcementsRepository.persistAndFlush(announcement);
    return announcement;
  }

  // Delete an announcement
  async deleteAnnouncement(announcement: string, company: Company) {
    const announcementObject = this.announcementsRepository.findOne({
      id: announcement,
      companyOrOrganization: company.id,
    });
    if (!announcementObject) {
      throw new BadRequestException(
        'This Announcement has either been already deleted or it does not exist anymore, please refresh!',
      );
    }

    this.announcementsRepository.removeAndFlush(announcementObject);

    return {
      status: 'deleted',
    };
  }
}
