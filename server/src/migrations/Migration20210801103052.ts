import { Migration } from '@mikro-orm/migrations';

export class Migration20210801103052 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" drop constraint if exists "user_id_check";');
    this.addSql('alter table "user" alter column "id" type varchar(255) using ("id"::varchar(255));');
    this.addSql('alter table "user" alter column "id" set default \'1736afc0-93aa-47c8-bc5d-f2b4427a2618\';');
    this.addSql('alter table "user" add constraint "user_pkey" primary key ("id");');
  }

}
