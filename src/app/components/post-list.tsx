'use client';

import { Button } from '@/app/components/common/button';
import { Label } from '@/app/components/common/label';
import { Card, CardBody, CardHeader } from '@/app/components/common/card';
import { removePost } from '@/app/features/post/PostAction';
import { IPost } from '@/model/Post';

type Props = {
  initialPosts: IPost[];
  onEditMode: (post: IPost) => void;
  onPostRemove: (removedPost: IPost) => void;
};

function PostList({ initialPosts, onEditMode, onPostRemove }: Props) {
  const handleRemove = async (id: number) => {
    if (!window.confirm('정말 삭제하시겠습니까?')) {
      return;
    }

    const removedPost = await removePost(id);
    onPostRemove(removedPost);
  };

  return (
    <div className="flex flex-col w-full">
      <Label>리스트 확인</Label>
      <div className="grid grid-cols-1 gap-x-6 gap-y-5">
        <ul>
          {initialPosts.map((post) => (
            <li
              key={post.id}
              className="p-5 mb-4 bg-white border border-gray-200 task rounded-xl shadow-theme-sm dark:border-gray-800 dark:bg-white/5"
            >
              <Card>
                <CardHeader>
                  {post.id} - {post.title}
                </CardHeader>
                <CardBody>{post.content}</CardBody>
                <div className="flex justify-end">
                  <Button size="small" onClick={() => onEditMode(post)}>
                    수정
                  </Button>
                  <Button size="small" className="ml-2" onClick={() => handleRemove(post.id)}>
                    삭제
                  </Button>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PostList;
