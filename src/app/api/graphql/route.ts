import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { ApolloServer } from '@apollo/server'
import { readdirSync, readFileSync } from 'fs'
import { join } from 'path'
import { DIRECTIVES } from '@graphql-codegen/typescript-mongodb'
import resolvers from '@/backend/resolvers'

const typeDefs = [
  DIRECTIVES,
  ...readdirSync('./src/backend/typeDefs')
    .filter((file) => file.endsWith('.graphql'))
    .map((file) => readFileSync(join('./src/backend/typeDefs', file), 'utf8')),
]

const server = new ApolloServer({
  resolvers,
  typeDefs,
})

const handler = startServerAndCreateNextHandler(server)

export { handler as GET, handler as POST }
