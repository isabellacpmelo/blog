/** @format */

import { Container } from '@/components/Container'
import { Header } from '@/components/Header'
import { PostsList } from '@/components/PostsList'
import { SpinLoader } from '@/components/SpinLoader'
import Link from 'next/link'
import Image from 'next/image'
import { Suspense } from 'react'

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section className='grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16 group'>
        <Link href='#' className='w-full h-full overflow-hidden rounded-xl'>
          <Image
            className='group-hover:scale-105'
            src='/images/bryen_0.png'
            width={1200}
            height={720}
            alt='Titulo do post'
          />
        </Link>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat,
          animi vitae? Incidunt eos error beatae atque nesciunt deserunt cumque,
          quo nostrum provident dicta quas nemo animi, vitae tempore excepturi
          deleniti!
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <p className='text-6xl font-bold text-center py-8'> Aqui é o FOOTER</p>
      </footer>
    </Container>
  )
}
