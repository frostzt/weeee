import { Migration } from '@mikro-orm/migrations';

export class Migration20210815153150 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'alter table "company" drop constraint if exists "company_id_check";',
    );
    this.addSql(
      'alter table "company" alter column "id" type varchar(255) using ("id"::varchar(255));',
    );
    this.addSql(
      'alter table "company" alter column "id" set default \'088621f6-d190-4369-9280-fe5e39add303\';',
    );
    this.addSql(
      'alter table "company" add constraint "company_pkey" primary key ("id");',
    );

    this.addSql(
      'alter table "user" drop constraint if exists "user_id_check";',
    );
    this.addSql(
      'alter table "user" alter column "id" type varchar(255) using ("id"::varchar(255));',
    );
    this.addSql(
      'alter table "user" alter column "id" set default \'26ee3a60-8fda-4469-835b-cf6eb306bc97\';',
    );
    this.addSql(
      'alter table "user" add constraint "user_pkey" primary key ("id");',
    );
  }
}
