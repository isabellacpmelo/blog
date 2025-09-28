import PostCoverImage from '../PostCoverImage'
import { PostSummary } from '../PostSummary'
import { findAllPublicPosts } from '@/lib/post/queries'

export async function PostFeatured() {
  const posts = await findAllPublicPosts()
  const post = posts[0]

  const postLink = `/post/${post.slug}`
  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16 group'>
      <PostCoverImage
        linkProps={{ href: postLink, className: 'opacity-100' }}
        imageProps={{
          src: post.coverImageUrl,
          width: 1200,
          height: 720,
          priority: true,
          alt: post.title,
        }}
      />

      <PostSummary
        postLink={postLink}
        postHeading='h1'
        createdAt={post.createdAt}
        title={post.title}
        excerpt={post.excerpt}
      />
    </section>
  )
}
