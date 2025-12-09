import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from '../../prisma.config';
import { PrismaClient } from '@/app/generated/prisma/client'; 
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import 'dotenv/config';

declare global {
  var prisma: PrismaClient | undefined;
}

const createPrismaAdapter = () => {
  return new PrismaMariaDb({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    connectionLimit: 5,
  });
};

let client: PrismaClient;

if (process.env.NODE_ENV !== 'production') {
  if (!global.prisma) {
    const adapter = createPrismaAdapter();
    global.prisma = new PrismaClient({ adapter });
  }
  client = global.prisma;
  
} else {
  const adapter = createPrismaAdapter();
  client = new PrismaClient({ adapter });
}

export default client;