import { v4 as uuidv4 } from 'uuid';
import { Company } from './company.entity';
import { Exclude } from 'class-transformer';
import { AccountType } from '../enums/AccoutType';
import {
  Collection,
  Entity,
  LoadStrategy,
  ManyToOne,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { Task } from '../../company-features/tasks/entities/tasks.entity';

@Entity()
export class User {
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
  age?: number;

  @Property({ nullable: true })
  bio?: string;

  @Property({ nullable: false })
  username: string;

  @Property()
  @Exclude({ toPlainOnly: true })
  password: string;

  @Property({ default: 'cat' })
  picture: string;

  @Property({ default: AccountType.User })
  accountType: string;

  @ManyToOne(() => Company)
  companyOrOrganization?: string;

  @OneToMany({
    entity: () => Task,
    mappedBy: (b) => b.assignedTo,
    strategy: LoadStrategy.JOINED,
  })
  tasks? = new Collection<Task>(this);
}
