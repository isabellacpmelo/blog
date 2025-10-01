import { findPostBySlugCached } from '@/lib/post/queries'
import { notFound } from 'next/navigation'

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
    <div>
      <p>{post.title}</p>
    </div>
  )
}
