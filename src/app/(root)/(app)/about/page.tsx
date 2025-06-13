import jameshung from '@/assets/james.png'
import { RESUME_URL } from '@/constants/common'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'About - James Hung',
  openGraph: {
    title: 'About - James Hung',
    url: '/about',
  },
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return (
    <>
      <PageTitle title="About" />
      <div className="md:flex">
        <div className="mb-5 md:w-56 md:h-56">
          <Image src={jameshung} alt="James Photo" className="block w-full h-full rounded-full object-cover" placeholder="blur" />
        </div>
        <div className="md:flex-1 md:pl-6">
          <h1 className="mb-6 text-3xl font-bold">Chun-Ho (James) Hung </h1>
          <div className="mb-6">
            <p className="mb-1">
              Full-Stack Software Engineer based in New York City, United States. <br /> 
            </p>
          </div>
          <h1 className="mb-2 text-2xl font-bold">About Me</h1>
          <div className="mb-6">
            <p className="mb-1">
              A Full-Stack Software Engineer with over two years of practical experiences in researching AI Models and building software projects.
              <br />
              <br /> As for my hobbies, I am highly interested in playing piano. 
            </p>
          </div>
          <h1 className="mb-2 text-2xl font-bold">Languages</h1>
          <div className="mb-6">
            <p className="mb-1">Python, C/C++, Java, Golang</p>
          </div>
          <a
            download
            target="_blank"
            rel="nofollow"
            href={RESUME_URL}
            className="
              mr-3 inline-block
              px-6 py-3
              bg-gradient-to-r from-[#5c4033] via-[#b8860b] to-[#ffd700]
              text-white font-semibold
              rounded-full
              shadow-lg
              transition-transform transition-shadow duration-200
              hover:scale-105 hover:shadow-xl
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#b8860b]
            "
          >
            Resume
          </a>
        </div>
      </div>
    </>
  )
}
