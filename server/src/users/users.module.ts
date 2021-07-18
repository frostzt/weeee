import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { User } from './users.entity';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  imports: [MikroOrmModule.forFeature([User])],
  providers: [UsersService, UsersResolver],
})
export class UsersModule {}
