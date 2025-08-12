/** @format */

import { Header } from '@/components/Header'
import { SpinLoader } from '@/components/SpinLoader'

export default function HomePage() {
  console.log('Home Page')

  return (
    <div>
      <SpinLoader containerClasses='min-h-40' />
    </div>
  )
}
