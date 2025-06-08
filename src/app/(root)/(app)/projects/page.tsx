import React from 'react'
import PageTitle from '../components/PageTitle'
import { Metadata } from 'next'
import { FaGithub, FaSpinner, FaInfoCircle } from 'react-icons/fa'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Project - James Hung',
  openGraph: {
    title: 'Project - James Hung',
    url: '/project',
  },
  alternates: {
    canonical: '/project',
  },
}

export default function UpdatingProjectsPage() {
  return (
    <>
      <PageTitle title="Project" />
      <section className="max-w-4xl mx-auto px-4 py-8">
      {/* drop min-h-screen + justify-center, add top padding */}
      <div className="flex flex-col items-center gap-8 text-center pt-16">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-wide">
          Projects list is currently updating…
        </h1>

        <div className="flex items-center gap-6 text-gray-600 dark:text-gray-300">
          <FaGithub size={40} />
          <FaSpinner size={40} className="animate-spin" />
          <FaInfoCircle size={40} />
        </div>

        <p className="max-w-md text-sm md:text-base text-gray-500 dark:text-gray-400">
          Hang tight! We’re fetching the latest commits and repository metadata.
        </p>
      </div>
    </section>
    </>
  )
}
