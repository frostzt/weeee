import { IsString } from 'class-validator';

export class LoginUserDTO {
  @IsString()
  username: string;

  @IsString()
  password: string;
}
