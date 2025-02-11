import MDXContent from '@/components/MDXContent';
import { getPostBySlug, getPosts } from '@/lib/posts';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import path from 'path';

const blogDirectory = path.join(process.cwd(), 'content');

export async function generateStaticParams() {
  const posts = await getPosts(blogDirectory);
  if (!posts) return [];

  const slugs = posts.map((post) => ({ slug: post.slug }));

  return slugs;
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(blogDirectory, slug);

  if (!post) {
    notFound();
  }

  const { metadata, content } = post;
  const { title, image, publishedAt } = metadata;

  return (
    <article className="mt-8 flex flex-col gap-8 pb-16">
      {image && (
        <div className="relative mb-6 h-96 w-full overflow-hidden rounded-lg">
          <Image src={image} alt={title || ''} className="object-cover" fill />
        </div>
      )}

      <header>
        <h1 className="font-serif text-5xl tracking-wide decoration-border/75 decoration-2">
          {title}
        </h1>
        <p className="mt-2 text-xs text-muted-foreground">
          {publishedAt ?? ''}
        </p>
      </header>

      <main className="prose dark:prose-invert">
        <MDXContent source={content} />
      </main>
    </article>
  );
}
