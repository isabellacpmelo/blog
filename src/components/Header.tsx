/** @format */
'use Client'

export function Header() {
  console.log('Header')
  return (
    <h1 className='text-xl font-bold text-blog hover:text-white hover:bg-blue-100 transition duration-300'>
      Olá de dentro de page.tsx
    </h1>
  )
}
