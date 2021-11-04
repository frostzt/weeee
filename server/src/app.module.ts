import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AnnouncementsModule } from './company-features/announcements/announcements.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.dev.stage.env'],
    }),
    GraphQLModule.forRoot({
      debug: true,
      autoSchemaFile: true,
      cors: {
        origin: '*',
      },
    }),
    MikroOrmModule.forRoot(),
    UsersModule,
    AnnouncementsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
