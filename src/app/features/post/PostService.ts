import { PostRepository } from '@/app/features/post/PostRepository';

export class PostService {
  public static async write(title: string, content: string) {
    await PostRepository.create({
      title,
      content,
    });
  }

  public static async edit(id: number, title: string, content: string) {
    const post = await PostRepository.update({
      id,
      title,
      content,
    });

    return {
      ...post,
      updatedAt: post.updatedAt.toISOString(),
    };
  }

  public static async getAllPosts() {
    const posts = await PostRepository.findAll();

    return posts.map((post) => ({
      ...post,
      createdAt: post.createdAt.toISOString(),
      updatedAt: post.updatedAt.toISOString(),
    }));
  }
}
