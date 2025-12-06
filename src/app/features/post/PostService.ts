import { PostRepository } from '@/app/features/post/PostRepository';

export class PostService {
  public static async write(title: string, content: string) {
    await PostRepository.create({
      title,
      content,
    });
  }
}
