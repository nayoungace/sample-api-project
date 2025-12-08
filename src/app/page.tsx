import PostPage from '@/app/components/post-page';
import { PostService } from '@/app/features/post/PostService';

export default async function Home() {
  //- initial posts fetch
  const posts = await PostService.getAllPosts();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-noto dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black items-start">
        <PostPage initialPosts={posts} />
      </main>
    </div>
  );
}
