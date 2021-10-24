import { Migration } from '@mikro-orm/migrations';

export class Migration20211024071951 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "company" ("id" varchar(255) not null default \'ed0b26e9-e7b3-422b-b10a-53e4fd2869a8\', "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" varchar(255) not null, "email" varchar(255) not null, "bio" varchar(255) null, "password" varchar(255) not null, "picture" varchar(255) not null default \'cat\', "account_type" varchar(255) not null default \'Company\');');
    this.addSql('alter table "company" add constraint "company_pkey" primary key ("id");');

    this.addSql('create table "user" ("id" varchar(255) not null default \'7b1f4ab4-4192-4eda-b264-e54b52bb5575\', "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" varchar(255) not null, "email" varchar(255) not null, "age" int4 null, "bio" varchar(255) null, "username" varchar(255) not null, "password" varchar(255) not null, "picture" varchar(255) not null default \'cat\', "account_type" varchar(255) not null default \'User\', "company_or_organization_id" varchar(255) null);');
    this.addSql('alter table "user" add constraint "user_pkey" primary key ("id");');

    this.addSql('create table "announcements" ("id" varchar(255) not null default \'0e96c8a9-3276-43b1-8e71-7c901cedcfb4\', "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "title" varchar(255) not null, "description" varchar(255) not null, "company_or_organization_id" varchar(255) not null);');
    this.addSql('alter table "announcements" add constraint "announcements_pkey" primary key ("id");');

    this.addSql('alter table "user" add constraint "user_company_or_organization_id_foreign" foreign key ("company_or_organization_id") references "company" ("id") on update cascade on delete set null;');

    this.addSql('alter table "announcements" add constraint "announcements_company_or_organization_id_foreign" foreign key ("company_or_organization_id") references "company" ("id") on update cascade;');
  }

}
