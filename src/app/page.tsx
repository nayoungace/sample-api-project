import { Title } from '@/app/components/common/title';
import PostForm from '@/app/components/post-form';
import PostList from '@/app/components/post-list';
import { PostService } from '@/app/features/post/PostService';

export default async function Home() {
  const posts = await PostService.getAllPosts();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-noto dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black items-start">
        <div className="flex flex-col w-full items-center gap-6 text-center sm:items-start sm:text-left">
          <Title>Sample-api-project</Title>
          <PostForm />
          <PostList initialPosts={posts} />
        </div>
      </main>
    </div>
  );
}
