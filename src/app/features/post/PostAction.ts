'use server';

import { PostService } from '@/app/features/post/PostService';

export async function submitPost(formData: FormData) {
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;

  await PostService.write(title, content);

  return;
}
