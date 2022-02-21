import path from 'path';
import { MikroORM } from '@mikro-orm/core';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';

// Migrates to the latest migration
(async () => {
  const orm = await MikroORM.init({
    type: 'postgresql',
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    dbName: 'weeee',
    debug: true,
    entities: ['dist/**/*.entity.js'],
    entitiesTs: ['dist/**/*.entity.ts'],
    metadataProvider: TsMorphMetadataProvider,
    migrations: {
      path: path.join(__dirname, './src/migrations'),
      pattern: /^[\w-]+\d+\.[tj]s$/,
    },
  });

  const migrator = orm.getMigrator();
  await migrator.createMigration();
  await migrator.up();
})();
