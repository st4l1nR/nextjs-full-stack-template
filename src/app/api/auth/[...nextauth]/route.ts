import NextAuth, { AuthOptions, Session } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { getSession } from 'next-auth/react'

export const nextAuthOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        return {
          id: '',
          avatar: '',
          email: '',
          name: '',
          role: '' as any,
          accessToken: '',
        }
      },
    }),
  ],
  callbacks: {
    session: ({ session, token }) => {
      if (token) {
        session.user = token.user
      }
      return session
    },
    jwt: ({ token, user }) => {
      if (user) {
        token.user = user
      }
      return token
    },
  },
  pages: {
    signIn: `${process.env.NEXT_PUBLIC_AUTH_URL}/admin`,
  },
}

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST }
