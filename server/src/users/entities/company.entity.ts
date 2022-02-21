import { v4 as uuidv4 } from 'uuid';
import { User } from './users.entity';
import { Exclude } from 'class-transformer';
import { AccountType } from '../enums/AccoutType';
import {
  Collection,
  Entity,
  LoadStrategy,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { Announcements } from '../../company-features/announcements/entities/announcements.entity';
import { Task } from '../..//company-features/tasks/entities/tasks.entity';

@Entity()
export class Company {
  @PrimaryKey({ default: uuidv4() })
  id!: string;

  @Property({ type: 'date' })
  createdAt = new Date();

  @Property({ type: 'date', onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property()
  name: string;

  @Property({ nullable: false })
  email: string;

  @Property({ nullable: true })
  bio?: string;

  @Property()
  @Exclude({ toPlainOnly: true })
  password: string;

  @Property({ default: 'cat' })
  picture: string;

  @Property({ default: AccountType.Company })
  accountType: string;

  @OneToMany({
    entity: () => User,
    mappedBy: (b) => b.companyOrOrganization,
    strategy: LoadStrategy.JOINED,
  })
  users? = new Collection<User>(this);

  @OneToMany({
    entity: () => Announcements,
    mappedBy: (b) => b.companyOrOrganization,
    strategy: LoadStrategy.JOINED,
  })
  announcements? = new Collection<Announcements>(this);

  @OneToMany({
    entity: () => Task,
    mappedBy: (b) => b.createdByCompany,
    strategy: LoadStrategy.JOINED,
  })
  createdTasks? = new Collection<Task>(this);
}
