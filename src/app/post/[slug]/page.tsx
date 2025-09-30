import { findPostBySlugCached } from '@/lib/post/queries'
import { notFound } from 'next/navigation'

type PostSlugPageProps = {
  params: Promise<{ slug: string }>
}

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params

  const post = await findPostBySlugCached(slug).catch((error) => {
    console.error(error)
    return undefined
  })

  if (!post) notFound()

  return <h1 className='font-extrabold py-16'>{post.title}</h1>
}
