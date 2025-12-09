import client from '@/lib/prisma';
import { IPostCreate, IPostUpdate } from '@/model/Post';

export class PostRepository {
  public static async create(param: IPostCreate) {
    return client.post.create({
      data: param,
    });
  }

  public static async update(param: IPostUpdate) {
    return client.post.update({
      where: { id: param.id },
      data: {
        title: param.title,
        content: param.content,
      },
    });
  }

  public static async findAll() {
    return await client.post.findMany({
      orderBy: {
        id: 'desc',
      },
    });
  }
}
