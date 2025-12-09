'use client';

import { useState } from 'react';
import { Title } from '@/app/components/common/title';
import PostForm from '@/app/components/post-form';
import PostList from '@/app/components/post-list';
import { IPost, PostType } from '@/model/Post';

function PostPage({ initialPosts }: { initialPosts: IPost[] }) {
  //- page mode
  const [mode, setMode] = useState<string>(PostType.WRITE);
  const [editPost, setEditPost] = useState<IPost | null>(null);

  const handleWriteMode = () => {
    setMode(PostType.WRITE);
    setEditPost(null);
  };
  const handleEditMode = (post: IPost) => {
    setMode(PostType.EDIT);
    setEditPost(post);
  };

  //- client posts update
  const [posts, setPosts] = useState<IPost[]>(initialPosts);
  const updatePosts = (prevPosts: IPost[], newPost: IPost): IPost[] => {
    const exists = prevPosts.some((post) => post.id === newPost.id);

    if (exists) {
      return prevPosts.map((post) => (post.id === newPost.id ? newPost : post));
    } else {
      return [newPost, ...prevPosts];
    }
  };
  const handlePostUpdate = (newPost: IPost | undefined) => {
    if (!newPost) {
      return;
    }

    setPosts((prevPosts) => updatePosts(prevPosts, newPost));
    handleWriteMode();
  };
  const handlePostRemove = (removedPost: IPost) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== removedPost.id));
  };

  return (
    <div className="flex flex-col w-full items-center gap-6 text-center sm:items-start sm:text-left">
      <Title>Sample-api-project</Title>
      <PostForm mode={mode} post={editPost} onWriteMode={handleWriteMode} onPostUpdate={handlePostUpdate} />
      <PostList initialPosts={posts} onEditMode={handleEditMode} onPostRemove={handlePostRemove} />
    </div>
  );
}

export default PostPage;
