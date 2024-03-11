import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { getSession } from 'next-auth/react'

const authLink = setContext(async (_, { headers }) => {
  const session = await getSession()
  const token = session?.user?.accessToken
  if (token !== null && token !== undefined) {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${token}`,
      },
    }
  } else {
    return headers
  }
})

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_API as string,
})

export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API as string,
  cache: new InMemoryCache(),
  link: from([authLink, httpLink]),
})
