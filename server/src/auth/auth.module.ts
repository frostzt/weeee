import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { User } from 'src/users/users.entity';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';

@Module({
  imports: [MikroOrmModule.forFeature([User])],
  providers: [AuthService, AuthResolver],
})
export class AuthModule {}
