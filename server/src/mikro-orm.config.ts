import * as path from 'path';
import { Options } from '@mikro-orm/core';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';

// const config: Options = {
//   type: 'postgresql',
//   host: process.env.DB_HOST,
//   port: parseInt(process.env.DB_PORT),
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   dbName: process.env.DB_NAME,
//   debug: true,
//   entities: ['dist/**/*.entity.js'],
//   entitiesTs: ['src/**/*.entity.ts'],
//   metadataProvider: TsMorphMetadataProvider,
//   migrations: {
//     path: path.join(__dirname, './migrations'),
//     pattern: /^[\w-]+\d+\.[tj]s$/,
//   },
// };

const config: Options = {
  type: 'postgresql',
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'postgres',
  dbName: 'weeee',
  debug: true,
  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],
  metadataProvider: TsMorphMetadataProvider,
  migrations: {
    path: path.join(__dirname, './migrations'),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
};

export default config;
