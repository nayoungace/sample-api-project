'use client';

import { useState } from 'react';
import { Button } from '@/app/components/common/button';
import { FormInput, FormItem, FormTextarea } from '@/app/components/common/form';
import { Label } from '@/app/components/common/label';
import { submitPost } from '@/app/features/post/PostAction';

function PostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (formData: FormData) => {
    if (title.length < 1) {
      alert('제목을 입력해 주세요.');
      return;
    }
    if (content.length < 1) {
      alert('내용을 입력해 주세요.');
      return;
    }
    await submitPost(formData);
  };

  return (
    <form className="flex flex-col w-full" action={handleSubmit}>
      <div className="grid grid-cols-1 gap-x-6 gap-y-5">
        <FormItem>
          <Label>제목</Label>
          <FormInput name="title" onChange={(e) => setTitle(e.target.value)} placeholder="제목을 입력해주세요." />
        </FormItem>
        <FormItem>
          <Label>내용</Label>
          <FormTextarea name="content" onChange={(e) => setContent(e.target.value)} placeholder="내용을 입력해주세요." />
        </FormItem>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <Button type="submit" className="md:ml-auto">
            저장
          </Button>
        </div>
      </div>
    </form>
  );
}

export default PostForm;
