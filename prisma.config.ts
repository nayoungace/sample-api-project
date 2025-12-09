import 'dotenv/config';
import { defineConfig } from 'prisma/config';

export const DB_HOST = process.env.DB_HOST;
export const DB_PORT = parseInt(process.env.DB_PORT || '3306', 10);
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_DATABASE = process.env.DB_DATABASE;

const createDatabaseUrl = () => {
  if (!DB_HOST || !DB_USER || !DB_PASSWORD || !DB_DATABASE) {
    throw new Error('환경 변수에서 데이터베이스 설정을 가져오지 못했습니다.');
  }

  return `mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`;
};

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
    seed: 'tsx prisma/seed.ts',
  },
  datasource: {
    url: createDatabaseUrl(),
  },
});
