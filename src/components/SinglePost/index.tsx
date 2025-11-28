import { findPublicPostBySlugCached } from '@/lib/post/queries/public'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { PostHead } from '../PostHeading'
import { PostDate } from '../PostDate'
import { SafeMarkdown } from '../SafeMarkdown'

type SinglePostProps = {
  slug: string
}

export async function SinglePost({ slug }: SinglePostProps) {
  const post = await findPublicPostBySlugCached(slug).catch((error) => {
    console.error(error)
    return undefined
  })
  if (!post) notFound()

  return (
    <article className='mb-16'>
      <header className='group flex flex-col gap-4 mb-4'>
        <Image
          src={post.coverImageUrl}
          width={600}
          height={360}
          alt={post.title}
          className='rounded-xl'
        />

        <PostHead href={`/post/${post.slug}`}>{post.title}</PostHead>
        <p>
          {post.author} | <PostDate dateTime={post.createdAt} />
        </p>
      </header>

      <p className='mb-4 italic text-slate-600'>{post.excerpt}</p>

      <SafeMarkdown markdown={post.content} />
    </article>
  )
}
