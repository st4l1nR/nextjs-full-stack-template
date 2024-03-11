'use client'
import React from 'react'
import { ThemeProvider } from 'next-themes'

type Props = {
  children: React.ReactNode
}
const ProviderNextThemes: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      storageKey="theme"
      enableSystem
    >
      {children}
    </ThemeProvider>
  )
}

export default ProviderNextThemes
