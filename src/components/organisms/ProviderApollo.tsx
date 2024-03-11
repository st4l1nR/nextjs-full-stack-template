'use client'
import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { client } from '@/utils/client'

type Props = {
  children: React.ReactNode
}
const ProviderReactQuery = ({ children }: Props) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default ProviderReactQuery
