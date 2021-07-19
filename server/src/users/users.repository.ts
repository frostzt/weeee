import { EntityRepository } from '@mikro-orm/core';
import { Repository } from '@mikro-orm/core';
import { User } from './users.entity';

@Repository(User)
export class UsersRepository extends EntityRepository<User> {}
