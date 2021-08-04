import { Migration } from '@mikro-orm/migrations';

export class Migration20210804101350 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "user" ("id" varchar(255) not null default \'83410e16-85fa-417b-bcf3-70f197bacb7a\', "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" varchar(255) not null, "email" varchar(255) not null, "age" int4 null, "username" varchar(255) not null, "password" varchar(255) not null, "picture" varchar(255) not null default \'cat\');');
    this.addSql('alter table "user" add constraint "user_pkey" primary key ("id");');
  }

}
