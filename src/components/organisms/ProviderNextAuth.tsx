'use client'
import { SessionProvider } from 'next-auth/react'

type props = {
  children: React.ReactNode
}
const ProviderNextAuth: React.FC<props> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>
}

export default ProviderNextAuth
