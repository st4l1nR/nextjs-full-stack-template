import NextAuth, { DefaultSession } from 'next-auth'
import { JWT } from 'next-auth/jwt'

type User = {
  id: string
  role: 'admin' | 'super_admin' | 'user'
  email: string
  name: string
  avatar: string
  accessToken: string
}
declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: User
  }

  interface User {
    id: string
    role: 'admin' | 'super_admin' | 'user'
    email: string
    name: string
    avatar: string
    accessToken: string
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    user: User
  }
}
