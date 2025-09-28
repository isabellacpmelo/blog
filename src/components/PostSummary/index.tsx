import { formatDateTime, formatDistanceToNow } from '@/utils/format-datetime'
import { PostHead } from '../PostHeading'

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
      <time
        className='text-slate-600 text-sm/tight'
        dateTime={createdAt}
        title={formatDistanceToNow(createdAt)}>
        {formatDateTime(createdAt)}
      </time>
      <PostHead as={postHeading} href={postLink}>
        {title}
      </PostHead>
      <p>{excerpt}</p>
    </div>
  )
}
