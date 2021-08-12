import { v4 as uuidv4 } from 'uuid';
import { User } from './users.entity';
import { Exclude } from 'class-transformer';
import { AccountType } from './enums/AccoutType';
import {
  Collection,
  Entity,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';

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

  @OneToMany(() => User, (user) => user.companyOrOrganization, {
    nullable: true,
  })
  user?: User[];
}
