import { PrismaClient, Prisma } from '@/app/generated/prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import 'dotenv/config';

const adapter = new PrismaMariaDb({
  host: 'localhost',
  port: 3306,
  user: 'nayoungace',
  password: 'qkrskdud0!',
  database: 'nayoungace_db',
  connectionLimit: 5,
});

const prisma = new PrismaClient({
  adapter,
});

const postData: Prisma.PostCreateInput[] = [
  {
    title: '첫 번째 게시물',
    content: '첫 번째 게시물의 내용입니다.',
  },
  {
    title: '두 번째 게시물',
    content: '두 번째 게시물의 내용입니다.',
  },
  {
    title: '세 번째 게시물',
    content: '',
  },
];

export async function main() {
  for (const p of postData) {
    await prisma.post.create({ data: p });
  }
}

main();
