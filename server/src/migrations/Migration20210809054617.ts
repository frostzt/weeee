import { Migration } from '@mikro-orm/migrations';

export class Migration20210809054617 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "user" ("id" varchar(255) not null default \'f428ffce-83ef-4e37-b14e-6cc909953b2c\', "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" varchar(255) not null, "email" varchar(255) not null, "age" int4 null, "bio" varchar(255) null, "username" varchar(255) not null, "password" varchar(255) not null, "picture" varchar(255) not null default \'cat\', "account_type" varchar(255) not null default \'User\');');
    this.addSql('alter table "user" add constraint "user_pkey" primary key ("id");');
  }

}
