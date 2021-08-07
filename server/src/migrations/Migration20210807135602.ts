import { Migration } from '@mikro-orm/migrations';

export class Migration20210807135602 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "user" ("id" varchar(255) not null default \'c6cd9165-6dac-4a87-867c-4cf83be2787f\', "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" varchar(255) not null, "email" varchar(255) not null, "age" int4 null, "bio" varchar(255) null, "username" varchar(255) not null, "password" varchar(255) not null, "picture" varchar(255) not null default \'cat\', "account_type" varchar(255) not null default 0);');
    this.addSql('alter table "user" add constraint "user_pkey" primary key ("id");');
  }

}
