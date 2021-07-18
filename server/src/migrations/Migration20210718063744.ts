import { Migration } from '@mikro-orm/migrations';

export class Migration20210718063744 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "user" ("id" varchar(255) not null default \'0f64abee-e896-4095-b9e4-cea794ba80fe\', "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" varchar(255) not null, "email" varchar(255) not null, "age" int4 null);',
    );
    this.addSql(
      'alter table "user" add constraint "user_pkey" primary key ("id");',
    );
    this.addSql(
      'alter table "user" add constraint "user_email_unique" unique ("email");',
    );
  }
}
