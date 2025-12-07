import { submitPost } from '@/app/features/post/PostAction';
import { Button } from '@/app/components/common/button';
import { FormInput, FormItem, FormTextarea } from '@/app/components/common/form';
import { Label } from '@/app/components/common/label';
import { Title } from '@/app/components/common/title';
import PostList from '@/app/components/post-list';
import { PostService } from '@/app/features/post/PostService';

export default async function Home() {
  const posts = await PostService.getAllPosts();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-noto dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black items-start">
        <div className="flex flex-col w-full items-center gap-6 text-center sm:items-start sm:text-left">
          <Title>Sample-api-project</Title>
          <form className="flex flex-col w-full" action={submitPost}>
            <div className="grid grid-cols-1 gap-x-6 gap-y-5">
              <FormItem>
                <Label>제목</Label>
                <FormInput name="title" placeholder="제목을 입력해주세요." />
              </FormItem>
              <FormItem>
                <Label>내용</Label>
                <FormTextarea name="content" placeholder="내용을 입력해주세요." />
              </FormItem>
              <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
                <Button type="submit" className="md:ml-auto">
                  저장
                </Button>
              </div>
            </div>
          </form>
          <PostList initialPosts={posts} />
        </div>
      </main>
    </div>
  );
}
