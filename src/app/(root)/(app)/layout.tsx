import type { Metadata } from 'next'
import PageTitleAnimation from './components/PageTitleAnimation'
import RootBackground from './components/RootBackground'

export const metadata: Metadata = {
  title: 'James Hung',
  description: 'I’m James Hung, Full Stack Web Developer based in New York, NY.',
  openGraph: {
    images: '/media/poster.jpg',
    title: 'James Hung Ariansya',
    description: 'I’m James Hung, Full Stack Web Developer based in NYC, United States.',
    url: '/',
  },
  alternates: {
    canonical: '/',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RootBackground />
      <PageTitleAnimation />
      <main className="relative z-10 flex-1 bg-white/60 p-3 dark:bg-black/75 md:px-5 md:pb-10 lg:px-10">{children}</main>
    </>
  )
}
