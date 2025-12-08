'use client';

import { useState } from 'react';
import { Title } from '@/app/components/common/title';
import PostForm from '@/app/components/post-form';
import PostList from '@/app/components/post-list';
import { IPost, PostType } from '@/model/Post';

function PostPage({ initialPosts }: { initialPosts: IPost[] }) {
  const [mode, setMode] = useState<string>(PostType.CREATE);

  const handleChangeMode = (newMode: string) => {
    setMode(newMode);
  };

  return (
    <div className="flex flex-col w-full items-center gap-6 text-center sm:items-start sm:text-left">
      <Title>Sample-api-project</Title>
      <PostForm />
      <PostList initialPosts={initialPosts} onChangeMode={handleChangeMode} />
    </div>
  );
}

export default PostPage;
