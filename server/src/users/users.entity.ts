import { v4 as uuidv4 } from 'uuid';
import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class User {
  @PrimaryKey({ default: uuidv4(), unique: true })
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

  @Property({ nullable: false })
  username: string;

  @Property()
  password: string;
}
