'use client';

import { useState } from 'react';
import { Title } from '@/app/components/common/title';
import PostForm from '@/app/components/post-form';
import PostList from '@/app/components/post-list';
import { IPost, PostType } from '@/model/Post';

function PostPage({ initialPosts }: { initialPosts: IPost[] }) {
  const [mode, setMode] = useState<string>(PostType.CREATE);
  const [editPost, setEditPost] = useState<IPost | null>(null);

  const handleEdit = (post: IPost) => {
    setMode(PostType.EDIT);
    setEditPost(post);
  };

  return (
    <div className="flex flex-col w-full items-center gap-6 text-center sm:items-start sm:text-left">
      <Title>Sample-api-project</Title>
      <PostForm mode={mode} post={editPost} />
      <PostList initialPosts={initialPosts} onEdit={handleEdit} />
    </div>
  );
}

export default PostPage;
