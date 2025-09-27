import { postRepository } from '@/repositories/post'
import PostCoverImage from '../PostCoverImage'
import { PostSummary } from '../PostSummary'

export async function PostsList() {
  const posts = await postRepository.findAll()

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
      {posts.map((post) => {
        const postLink = `/post/${post.slug}`
        return (
          <div className='flex flex-col gap-4 group' key={post.id}>
            <PostCoverImage
              linkProps={{
                href: postLink,
                className: 'opacity-100',
              }}
              imageProps={{
                src: post.coverImageUrl,
                width: 1200,
                height: 720,
                alt: post.title,
              }}
            />
            <PostSummary
              postLink={postLink}
              postHeading='h2'
              createdAt={post.createdAt}
              title={post.title}
              excerpt={post.excerpt}
            />
          </div>
        )
      })}
    </div>
  )
}
