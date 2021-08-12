import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from './users.entity';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { Company } from './company.entity';

@Module({
  imports: [
    ConfigModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: {
          expiresIn: 3600,
        },
      }),
    }),
    MikroOrmModule.forFeature([User, Company]),
  ],
  providers: [UsersService, UsersResolver, JwtStrategy],
  exports: [JwtStrategy, PassportModule],
})
export class UsersModule {}
