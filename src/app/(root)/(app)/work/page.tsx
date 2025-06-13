import { StaticImageData } from 'next/image';
import nyu from '@/assets/nyu_purple.png'
import tsmc from '@/assets/tsmc.svg'
import unsw from '@/assets/unsw_yellow.png'
import ncku from '@/assets/ncku.png'
import quanta from '@/assets/quanta.png'

import type { Metadata } from 'next'
import PageTitle from '../components/PageTitle'


export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Work - James Hung',
  openGraph: {
    title: 'Work - James Hung',
    url: '/work',
  },
  alternates: {
    canonical: '/work',
  },
}


{/*Insert Work Experience Here*/}
export interface IWorkExperience {
  title: string
  company: string
  iconPath: StaticImageData
  start: string
  end: string
  responsibilities: string[]
}

// Define your experiences with explicit icon paths
const experiences: IWorkExperience[] = [
  {
    title: 'Software Engineer',
    company: 'TSMC',
    iconPath: tsmc,
    start: 'Jun 2025',
    end: 'Present',
    responsibilities: [
      'Ongoing',
    ],
  },
  {
    title: 'Graduate Teaching Assistant',
    company: 'NYU Courant Mathematical Institute',
    iconPath: nyu,
    start: 'Jan 2025',
    end: 'Present',
    responsibilities: [
      'Developed responsive UI with React and Tailwind CSS',
      'Implemented CI/CD pipeline with GitHub Actions',
      'Collaborated with designers to improve UX flows',
    ],
  },
  {
    title: 'Research Assistant',
    company: 'UNSW Collaborative Human-Centric AI Systems (CRUISE) Lab',
    iconPath: unsw,
    start: 'May 2024',
    end: 'Aug 2024',
    responsibilities: [
      'Built and maintained company website using Next.js',
      'Integrated RESTful APIs and GraphQL endpoints',
      'Wrote unit and integration tests with Jest',
    ],
  },
  {
    title: 'Undergraduate Research Assistant',
    company: 'NCKU Multimedia and Computer Vision Lab',
    iconPath: ncku,
    start: 'Nov 2021',
    end: 'Jul 2022',
    responsibilities: [
      'Built and maintained company website using Next.js',
      'Integrated RESTful APIs and GraphQL endpoints',
      'Wrote unit and integration tests with Jest',
    ],
  },
  {
    title: 'Research & Development Internship',
    company: 'Quanta-NCKU Joint AI Research Center',
    iconPath: quanta,
    start: 'Sep 2022',
    end: 'Jun 2023',
    responsibilities: [
      'Built and maintained company website using Next.js',
      'Integrated RESTful APIs and GraphQL endpoints',
      'Wrote unit and integration tests with Jest',
    ],
  },
]

export default async function WorkPage() {
  const experiencesData = await loadExperiences()

  return (
    <>
      <PageTitle title="Work" />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Professional Experience
        </h2>
        <div className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-[7rem]">
          {experiencesData.map((exp, idx) => (
            <div key={idx} className="mb-[5rem] ml-[5rem] ml-h-[1rem] min-h-[10rem] bg-white/80 dark:bg-gray-800/80 p-6 rounded-lg">
              {/* Customized company logo in timeline bullet */}
              <span className="absolute -left-[3rem] w-[6rem] h-[6rem] bg-white rounded-full overflow-hidden ring-2 ring-gray-200 dark:ring-gray-700">
                <img
                  src={(exp.iconPath).src}
                  alt={`${exp.company} logo`}
                  className="w-[6rem] h-[6rem] mr-3 rounded-full object-contain p-2"
                />
              </span>

              <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-gray-100 ml-6">    
                {exp.title} @ {exp.company}
              </h3>

              <time className="block mb-2 ml-6 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                {exp.start} — {exp.end}
              </time>

              <ul className="list-disc list-inside ml-6 text-gray-700 dark:text-gray-300">
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

async function loadExperiences(): Promise<IWorkExperience[]> {
  // In future, replace with API or database fetch
  return experiences
}
