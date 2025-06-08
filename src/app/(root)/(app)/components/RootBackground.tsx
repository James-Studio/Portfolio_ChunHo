'use client'

import background from '@/assets/nyc.jpg'
import { useRootBackground } from '@/contexts/RootBackgroundContext'
import Image from 'next/image'
import React, { memo, useRef, useEffect } from 'react'
import { FiVolume2, FiVolumeX } from 'react-icons/fi'

const RootBackground: React.FC = () => {
  const { isAudioPlaying, toggleAudio } = useRootBackground()
  const audioRef = useRef<HTMLAudioElement>(null)

  // whenever `isAudioPlaying` changes, play or pause the audio
  useEffect(() => {
    if (!audioRef.current) return
    if (isAudioPlaying)  audioRef.current.play()
    else                 audioRef.current.pause()
  }, [isAudioPlaying])

  return (
    <>
      {/* toggle button */}
      <button
        aria-label={isAudioPlaying ? 'Mute background music' : 'Play background music'}
        type="button"
        className="fixed right-0 top-0 z-[120] mr-3 mt-3 leading-none md:mr-5 md:mt-5 lg:mr-10"
        onClick={() => toggleAudio()}
      >
        {isAudioPlaying ? <FiVolume2 size={18} /> : <FiVolumeX size={18} />}
      </button>

      {/* background image */}
      <div className="fixed inset-0 overflow-hidden bg-white dark:bg-black">
        <Image
          src={background}
          alt="Background image"
          className="block h-full w-full object-cover"
        />

        {/* hidden audio element */}
        <audio
          ref={audioRef}
          src="/media/River_Flows_In_You.mp3"   // ← put your music file here
          loop
          className="absolute w-0 h-0 opacity-0 pointer-events-none"
        />
      </div>
    </>
  )
}

export default memo(RootBackground)
