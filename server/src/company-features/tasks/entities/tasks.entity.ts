import { v4 as uuidv4 } from 'uuid';
import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Company } from '../../../users/entities/company.entity';
import { User } from '../../../users/entities/users.entity';

@Entity()
export class Task {
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
  createdByCompany: string;

  @ManyToOne(() => User)
  assignedTo: string;
}
