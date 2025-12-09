'use client';

import { Button } from '@/app/components/common/button';
import { Label } from '@/app/components/common/label';
import { Card, CardBody, CardHeader } from '@/app/components/common/card';
import { IPost } from '@/model/Post';

type Props = {
  initialPosts: IPost[];
  onEditMode: (post: IPost) => void;
};

function PostList({ initialPosts, onEditMode }: Props) {
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
                <div>
                  <Button size="small" className="ml-auto" onClick={() => onEditMode(post)}>
                    수정
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
