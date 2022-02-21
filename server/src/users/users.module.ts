import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from './entities/users.entity';
import { UsersResolver } from './resolvers/users.resolver';
import { UsersService } from './users.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { Company } from './entities/company.entity';

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
