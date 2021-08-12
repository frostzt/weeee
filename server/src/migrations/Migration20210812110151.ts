import { Migration } from '@mikro-orm/migrations';

export class Migration20210812110151 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "company" ("id" varchar(255) not null default \'11342e37-56b7-48df-84b7-05c58eb7915b\', "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" varchar(255) not null, "email" varchar(255) not null, "bio" varchar(255) null, "password" varchar(255) not null, "picture" varchar(255) not null default \'cat\', "account_type" varchar(255) not null default \'Company\');',
    );
    this.addSql(
      'alter table "company" add constraint "company_pkey" primary key ("id");',
    );

    this.addSql(
      'create table "user" ("id" varchar(255) not null default \'36e4c274-c397-45b5-bde8-e3adc5c0eef7\', "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" varchar(255) not null, "email" varchar(255) not null, "age" int4 null, "bio" varchar(255) null, "username" varchar(255) not null, "password" varchar(255) not null, "picture" varchar(255) not null default \'cat\', "account_type" varchar(255) not null default \'User\', "company_or_organization_id" varchar(255) null);',
    );
    this.addSql(
      'alter table "user" add constraint "user_pkey" primary key ("id");',
    );

    this.addSql(
      'alter table "user" add constraint "user_company_or_organization_id_foreign" foreign key ("company_or_organization_id") references "company" ("id") on update cascade on delete set null;',
    );
  }
}
