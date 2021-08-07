import { v4 as uuidv4 } from 'uuid';
import { Exclude } from 'class-transformer';
import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

export enum AccountType {
  User,
  Company,
}

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
}
