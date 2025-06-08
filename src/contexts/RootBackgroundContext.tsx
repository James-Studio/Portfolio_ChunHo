import React, { createContext, useCallback, useContext, useState } from 'react'

interface RootBackgroundContextType {
  isAudioPlaying: boolean
  toggleAudio: (play?: boolean) => void
}

const RootBackgroundContext = createContext<RootBackgroundContextType>({
  isAudioPlaying: false,
  toggleAudio: () => {},
})

export const RootBackgroundProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false)

  const toggleAudio: RootBackgroundContextType['toggleAudio'] = useCallback((play) => {
    setIsAudioPlaying(prev => play !== undefined ? play : !prev)
  }, [])

  return (
    <RootBackgroundContext.Provider value={{ isAudioPlaying, toggleAudio }}>
      {children}
    </RootBackgroundContext.Provider>
  )
}

export function useRootBackground() {
  const context = useContext(RootBackgroundContext)
  if (!context) throw new Error('useRootBackground must be used within a RootBackgroundProvider')
  return context
}
