import Link from 'next/link'

export function Footer() {
  return (
    <div>
      <footer className='pb-8 text-center'>
        <p>
          <span>Copyright &copy; {new Date().getFullYear()} - </span>
          <Link href='/'>The Blog</Link>
        </p>
      </footer>
    </div>
  )
}
