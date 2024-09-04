import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Loading from '@/components/Loading'
import Navbar from '@/components/Navbar'

const MusicCardCollection = dynamic(() => import('@/components/music-card-collection').then(mod => mod.MusicCardCollection), {
  loading: () => <Loading />,
  ssr: false
})

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <MusicCardCollection />
      </main>
    </div>
  )
}
