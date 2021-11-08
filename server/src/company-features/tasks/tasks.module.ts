import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from 'src/users/users.module';
import { Task } from './entities/tasks.entity';
import { TasksResolver } from './tasks.resolver';
import { TasksService } from './tasks.service';

@Module({
  imports: [ConfigModule, UsersModule, MikroOrmModule.forFeature([Task])],
  providers: [TasksResolver, TasksService],
})
export class TasksModule {}
