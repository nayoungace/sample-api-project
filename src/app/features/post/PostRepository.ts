import client from '@/lib/prisma';
import { IPostCreate } from '@/model/Post';

export class PostRepository {
  public static async create(param: IPostCreate) {
    return client.post.create({
      data: param,
    });
  }

  public static async findAll() {
    return await client.post.findMany();
  }
}
