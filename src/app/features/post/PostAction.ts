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
    return await PostService.write(title, content);
  }
}

export async function editPost(formData: FormData) {
  const id = Number(formData.get('id'));
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;

  if (!id) {
    throw new Error('수정할 게시글 ID가 유효하지 않습니다.');
  }

  if (isValid(title, content)) {
    return await PostService.edit(id, title, content);
  }
}

export async function removePost(id: number) {
  return await PostService.remove(id);
}
