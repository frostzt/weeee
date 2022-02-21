import { v4 as uuidv4 } from 'uuid';
import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Company } from '../../../users/entities/company.entity';

@Entity()
export class Announcements {
  @PrimaryKey({ default: uuidv4() })
  id!: string;

  @Property({ type: 'date' })
  createdAt = new Date();

  @Property({ type: 'date', onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property()
  title: string;

  @Property()
  description: string;

  @ManyToOne(() => Company)
  companyOrOrganization: string;
}
