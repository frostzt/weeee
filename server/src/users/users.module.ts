import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';
import { User } from './users.entity';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    ConfigModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'this-is-a-secret-long-lost',
      signOptions: {
        expiresIn: 3600,
      },
    }),
    MikroOrmModule.forFeature([User]),
  ],
  providers: [UsersService, UsersResolver, JwtStrategy],
  exports: [JwtStrategy, PassportModule],
})
export class UsersModule {}
