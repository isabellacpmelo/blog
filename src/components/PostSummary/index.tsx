import { PostHead } from '../PostHeading'
import { PostDate } from '../PostDate'

type PostSummaryProps = {
  postHeading: 'h1' | 'h2'
  postLink: string
  createdAt: string
  title: string
  excerpt: string
}

export function PostSummary({
  postHeading,
  postLink,
  createdAt,
  title,
  excerpt,
}: PostSummaryProps) {
  return (
    <div className='flex flex-col gap-3 sm:justify-center'>
      <PostDate dateTime={createdAt} />
      <PostHead as={postHeading} href={postLink}>
        {title}
      </PostHead>
      <p>{excerpt}</p>
    </div>
  )
}
