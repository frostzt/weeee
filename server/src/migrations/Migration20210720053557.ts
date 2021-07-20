import { Migration } from '@mikro-orm/migrations';

export class Migration20210720053557 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "user" ("id" varchar(255) not null default \'237c4f93-243d-4632-bb0c-634201acab08\', "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" varchar(255) not null, "email" varchar(255) not null, "age" int4 null, "username" varchar(255) not null, "password" varchar(255) not null);');
    this.addSql('alter table "user" add constraint "user_pkey" primary key ("id");');
  }

}
