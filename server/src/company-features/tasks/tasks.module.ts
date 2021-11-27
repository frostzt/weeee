import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from '../../users/users.module';
import { Task } from './entities/tasks.entity';
import { TasksResolver } from './tasks.resolver';
import { TasksService } from './tasks.service';

@Module({
  imports: [ConfigModule, MikroOrmModule.forFeature([Task]), UsersModule],
  providers: [TasksResolver, TasksService],
})
export class TasksModule {}
