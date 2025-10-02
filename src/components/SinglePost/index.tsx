import { findPostBySlugCached } from '@/lib/post/queries'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { PostHead } from '../PostHeading'
import { PostDate } from '../PostDate'

type SinglePostProps = {
  slug: string
}

export async function SinglePost({ slug }: SinglePostProps) {
  const post = await findPostBySlugCached(slug).catch((error) => {
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

      <div>{post.content}</div>
    </article>
  )
}
