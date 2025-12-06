import client from '@/lib/prisma';
import { PostCreate } from '@/model/Post';

export class PostRepository {
  public static async create(param: PostCreate) {
    return client.post.create({
      data: param,
    });
  }
}
