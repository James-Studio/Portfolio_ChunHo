import React from 'react'
import PageTitle from '../components/PageTitle'
import { Metadata } from 'next'
import { StaticImageData } from 'next/image';

import nyu from '@/assets/nyu_purple.png'
import ncku from '@/assets/ncku.png'


// Interfaces for Education and Publications
export interface IEducation {
  degree: string
  institution: string
  iconPath: StaticImageData      
  start: string
  end: string
  details: string[]
}

export interface IPublication {
  title: string
  venue: string
  year: string
  link?: string         // optional URL to the paper
}

// Static data: replace or extend as needed
const educationData: IEducation[] = [
  {
    degree: 'M.S. in Computer Science',
    institution: 'New York University',
    iconPath: nyu,
    start: 'Sep 2024',
    end: 'Present',
    details: [
      'Concentration: System Track',
    ],
  },
  {
    degree: 'B.S. in Computer Science',
    institution: 'National Cheng Kung University',
    iconPath: ncku,
    start: 'Sep 2019',
    end: 'Jun 2023',
    details: [
      'Concentration: Deep Learning & Computer Vision',
    ],
  },
]

const publicationsData: IPublication[] = [
  {
    title: 'A Trajectory-based Statistics and Tactics Analysis System for Table Tennis',
    venue: 'ACM Multimedia Asia 2023',
    year: '2023',
    link: 'https://dl.acm.org/doi/10.1145/3595916.3626355',
  },
]

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Education - James Hung',
  openGraph: {
    title: 'Education - James Hung',
    url: '/education',
  },
  alternates: {
    canonical: '/education',
  },
}

/**
 * Renders a vertical timeline for education entries
 */
function EducationTimeline({ data }: { data: IEducation[] }) {
  return (
    <div className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-[7rem]">
      {data.map((edu, idx) => (
        <div key={idx} className="mb-[5rem] ml-[5rem] ml-h-[1rem] min-h-[10rem] bg-white/80 dark:bg-gray-800/80 p-6 rounded-lg">
          <span className="absolute -left-[3rem] w-[6rem] h-[6rem] bg-white rounded-full overflow-hidden ring-2 ring-gray-200 dark:ring-gray-700">
            <img
              src={(edu.iconPath).src}
              alt={`${edu.institution} logo`}
              className="w-[6rem] h-[6rem] mr-3 rounded-full object-contain p-2"
            />
          </span>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {edu.degree} @ {edu.institution}
          </h3>
          <time className="block mb-2 text-sm font-normal text-gray-500 dark:text-gray-400">
            {edu.start} — {edu.end}
          </time>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            {edu.details.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

/**
 * Renders a list of publication entries
 */
function PublicationsList({ data }: { data: IPublication[] }) {
  return (
    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
      {data.map((pub, idx) => (
        <li key={idx}>
          <span className="font-semibold text-gray-900 dark:text-gray-100">
            {pub.title}
          </span>
          , <em>{pub.venue}</em> (<span className="text-gray-500">{pub.year}</span>)
          {pub.link && (
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 text-blue-600 hover:underline"
            >
              [PDF]
            </a>
          )}
        </li>
      ))}
    </ul>
  )
}

export default async function EducationPage() {
  const educations = await Promise.resolve(educationData)
  const publications = await Promise.resolve(publicationsData)

  return (
    <>
      <PageTitle title="Education" />
      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Educations
        </h2>
        <EducationTimeline data={educations} />
      </section>

      <section className="max-w-4xl mx-auto px-4 py-8 border-t border-gray-300 dark:border-gray-600">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Publications
        </h2>
        <PublicationsList data={publications} />
      </section>
    </>
  )
}

// Stub loader; replace with real fetch if needed
async function loadExperiences(): Promise<IEducation[]> {
  return educationData
}

async function loadPublications(): Promise<IPublication[]> {
  return publicationsData
}