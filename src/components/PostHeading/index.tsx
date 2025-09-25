/** @format */

import Link from 'next/link'

type PostHeadProps = {
  children: React.ReactNode
  href: string
  as?: 'h1' | 'h2'
}
export default function PostHead({
  children,
  href,
  as: Tag = 'h2',
}: PostHeadProps) {
  const headingClassesMap = {
    h1: 'text-2xl/tight font-extrabold sm:text-4xl',
    h2: 'text-2xl/tight font-extrabold sm:text-4xl',
  }

  return (
    <Tag className={headingClassesMap[Tag]}>
      <Link href={href}>{children}</Link>
    </Tag>
  )
}
