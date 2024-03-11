import React from 'react'
import { SkeletonTheme } from 'react-loading-skeleton'
import { useTheme } from 'next-themes'
import 'react-loading-skeleton/dist/skeleton.css'

type Props = {
  children: React.ReactNode
}
const ProviderSkeletonTheme: React.FC<Props> = ({ children }) => {
  const { theme } = useTheme()

  return (
    <SkeletonTheme
      baseColor={theme == 'dark' ? '#27272a' : ''}
      highlightColor={theme == 'dark' ? '#3f3f46' : ''}
    >
      {children}
    </SkeletonTheme>
  )
}

export default ProviderSkeletonTheme
