import PostCoverImage from '../PostCoverImage'
import PostHead from '../PostHeading'

export default function PostFeatured() {
  const slug = 'qualquer-coisa'
  const postLink = `/post/${slug}`
  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16 group'>
      <PostCoverImage
        linkProps={{ href: postLink, className: 'opacity-100' }}
        imageProps={{
          src: '/images/bryen_0.png',
          width: 1200,
          height: 720,
          priority: true,
          alt: 'Titulo do post',
        }}
      />
      <div className='flex flex-col gap-3 sm:justify-center'>
        <time className='text-slate-600 text-sm/tight' dateTime='2025-04-20'>
          20/04/2025 10:00
        </time>
        <PostHead as='h1' href={postLink}>
          Lorem ipsum dolor sit amet consectetur
        </PostHead>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          animi vitae? Incidunt eos error beatae atque nesciunt deserunt cumque,
          quo nostrum provident dicta quas nemo animi, vitae tempore excepturi
          deleniti!
        </p>
      </div>
    </section>
  )
}
