import PostsWithSearch from '@/components/PostsWithSearch';
import { getPosts } from '@/lib/posts';
import path from 'path';

const blogDirectory = path.join(process.cwd(), 'content');

export default async function BlogsPage() {
  const posts = await getPosts(blogDirectory);
  return (
    <article className="mt-8 flex flex-col gap-8">
      <h1 className="font-serif text-5xl tracking-wide decoration-border/75 decoration-2">
        my blog.
      </h1>
      {posts && <PostsWithSearch posts={posts} />}
    </article>
  );
}
