'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/app/components/common/button';
import { FormInput, FormItem, FormTextarea } from '@/app/components/common/form';
import { Label } from '@/app/components/common/label';
import { editPost, writePost } from '@/app/features/post/PostAction';
import { IPost, PostType } from '@/model/Post';

type Props = {
  mode: string;
  post?: IPost | null;
  onWriteMode: () => void;
  onPostUpdate: (newPost: IPost | undefined) => void;
};

function PostForm({ mode, post = null, onWriteMode, onPostUpdate }: Props) {
  //- form data state
  const initialTitle = post ? post.title : '';
  const initialContent = post ? post.content : '';
  const [title, setTitle] = useState<string>(initialTitle);
  const [content, setContent] = useState<string>(initialContent);

  //- initialize form data
  const initFormData = () => {
    setTitle('');
    setContent('');
  };

  //- form submit handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title.length < 1) {
      alert('제목을 입력해 주세요.');
      return;
    }
    if (content.length < 1) {
      alert('내용을 입력해 주세요.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);

      if (mode === PostType.WRITE) {
        const newPost: IPost | undefined = await writePost(formData);
        onPostUpdate(newPost);

        initFormData();
      } else if (mode === PostType.EDIT && post) {
        formData.append('id', post.id.toString());
        const newEditPost: IPost | undefined = await editPost(formData);
        onPostUpdate(newEditPost);

        onWriteMode();
      } else {
        console.error('유효하지 않은 모드입니다.');
      }
    } catch {
      console.error('폼 제출 중 오류가 발생했습니다.');
    }
  };

  //- change mode effect
  useEffect(() => {
    if (mode === PostType.EDIT && post) {
      setTitle(post.title);
      setContent(post.content);
    } else if (mode === PostType.WRITE) {
      initFormData();
    }
  }, [post, mode]);

  return (
    <>
      <form className="flex flex-col w-full" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-x-6 gap-y-5">
          <FormItem>
            <Label>제목</Label>
            <FormInput name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="제목을 입력해주세요." />
          </FormItem>
          <FormItem>
            <Label>내용</Label>
            <FormTextarea name="content" value={content} onChange={(e) => setContent(e.target.value)} placeholder="내용을 입력해주세요." />
          </FormItem>
          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
            {mode === PostType.WRITE ? (
              <Button type="submit" className="md:ml-auto" size="medium">
                저장
              </Button>
            ) : (
              <Button type="submit" className="md:ml-auto" size="medium">
                수정
              </Button>
            )}
          </div>
        </div>
      </form>
      {mode === PostType.EDIT && (
        <Button type="button" className="md:ml-auto" size="medium" onClick={() => onWriteMode()}>
          나가기
        </Button>
      )}
    </>
  );
}

export default PostForm;
