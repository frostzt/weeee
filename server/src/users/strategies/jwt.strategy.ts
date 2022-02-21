import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { User } from '../entities/users.entity';
import { Company } from '../entities/company.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(User)
    private usersRepository: EntityRepository<User>,
    @InjectRepository(Company)
    private companyRepository: EntityRepository<Company>,
    private configService: ConfigService,
  ) {
    super({
      secretOrKey: configService.get('JWT_SECRET'),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: JwtPayload): Promise<User | Company> {
    const { email } = payload;

    // Check if the user exists
    const user: User = await this.usersRepository.findOne({ email });
    if (user) {
      return user;
    }

    // Check if the company exists
    const company: Company = await this.companyRepository.findOne({ email });
    if (company) {
      return company;
    }

    throw new UnauthorizedException('No such entity does not exist!');
  }
}
