import Link from 'next/link';
import { Card } from './ui/Card';
import { PostMetadata } from '@/lib/posts';

interface PostsProps {
  posts: PostMetadata[];
}

export default function Posts({ posts }: PostsProps) {
  if (!posts.length) return <></>;
  return (
    <Card>
      <ul className="flex flex-col divide-y">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <div className="flex flex-col justify-between p-6 sm:flex-row sm:items-center">
                <div className="max-w-md md:max-w-lg">
                  <h3 className="text-lg font-semibold">{post.title}</h3>
                  <p className="mt-1 line-clamp-2 text-sm font-light text-muted-foreground">
                    {post.summary}
                  </p>
                </div>

                {post.publishedAt && (
                  <p className="mt-2 flex w-full justify-end text-sm font-light sm:mt-0 sm:w-auto">
                    {post.publishedAt}
                  </p>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  );
}
