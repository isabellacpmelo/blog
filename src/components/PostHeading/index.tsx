import Link from 'next/link'

type PostHeadProps = {
  children: React.ReactNode
  href: string
  as?: 'h1' | 'h2'
}
export function PostHead({ children, href, as: Tag = 'h2' }: PostHeadProps) {
  const headingClassesMap = {
    h1: 'text-2xl/tight sm:text-4xl font-extrabold',
    h2: 'text-2xl/tight font-bold',
  }

  const commonClasses = ''

  return (
    <Tag className={`${commonClasses} ${headingClassesMap[Tag]}`}>
      <Link className='hover:text-slate-600 transition-colors' href={href}>
        {children}
      </Link>
    </Tag>
  )
}
