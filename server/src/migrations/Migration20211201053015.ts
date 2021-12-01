import { Migration } from '@mikro-orm/migrations';

export class Migration20211201053015 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "company" ("id" varchar(255) not null default \'68cfe209-4d41-4ae9-b487-119376d51e3e\', "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" varchar(255) not null, "email" varchar(255) not null, "bio" varchar(255) null, "password" varchar(255) not null, "picture" varchar(255) not null default \'cat\', "account_type" varchar(255) not null default \'Company\');');
    this.addSql('alter table "company" add constraint "company_pkey" primary key ("id");');

    this.addSql('create table "user" ("id" varchar(255) not null default \'e1a03242-6717-41b9-a02b-7fa9bc2ed555\', "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" varchar(255) not null, "email" varchar(255) not null, "age" int4 null, "bio" varchar(255) null, "username" varchar(255) not null, "password" varchar(255) not null, "picture" varchar(255) not null default \'cat\', "account_type" varchar(255) not null default \'User\', "company_or_organization_id" varchar(255) null);');
    this.addSql('alter table "user" add constraint "user_pkey" primary key ("id");');

    this.addSql('create table "announcements" ("id" varchar(255) not null default \'19963442-c8cc-498a-97e0-252bee2d3db2\', "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "title" varchar(255) not null, "description" varchar(255) not null, "company_or_organization_id" varchar(255) not null);');
    this.addSql('alter table "announcements" add constraint "announcements_pkey" primary key ("id");');

    this.addSql('create table "task" ("id" varchar(255) not null default \'c70cac4e-5bdf-4685-ad5e-8508d5a89743\', "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "title" varchar(255) not null, "status" text check ("status" in (\'BACKLOG\', \'IN_PROGRESS\', \'DONE\')) not null default \'BACKLOG\', "description" varchar(255) not null, "created_by_company_id" varchar(255) not null, "assigned_to_id" varchar(255) not null);');
    this.addSql('alter table "task" add constraint "task_pkey" primary key ("id");');

    this.addSql('alter table "user" add constraint "user_company_or_organization_id_foreign" foreign key ("company_or_organization_id") references "company" ("id") on update cascade on delete set null;');

    this.addSql('alter table "announcements" add constraint "announcements_company_or_organization_id_foreign" foreign key ("company_or_organization_id") references "company" ("id") on update cascade;');

    this.addSql('alter table "task" add constraint "task_created_by_company_id_foreign" foreign key ("created_by_company_id") references "company" ("id") on update cascade;');
    this.addSql('alter table "task" add constraint "task_assigned_to_id_foreign" foreign key ("assigned_to_id") references "user" ("id") on update cascade;');
  }

}
