'use server';

import { PostService } from '@/app/features/post/PostService';

const isValid = (title: string, content: string) => {
  if (title.length < 1) {
    throw new Error('제목을 입력해 주세요.');
  }
  if (content.length < 1) {
    throw new Error('내용을 입력해 주세요.');
  }

  return true;
};

export async function writePost(formData: FormData) {
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;

  if (isValid(title, content)) {
    await PostService.write(title, content);
    return;
  }
}

export async function editPost(formData: FormData) {
  const id = Number(formData.get('id'));
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;

  if (isValid(title, content)) {
    await PostService.edit(id, title, content);
    return;
  }
}
