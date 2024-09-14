import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { ApolloServer } from '@apollo/server'
import { readdirSync, readFileSync } from 'fs'
import { join } from 'path'
import { DIRECTIVES } from '@graphql-codegen/typescript-mongodb'
import resolvers from '@/graphql/resolvers'
import models from '@/graphql/models'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'

const typeDefs = [
  DIRECTIVES,
  ...readdirSync('./src/graphql/typeDefs')
    .filter((file) => file.endsWith('.graphql'))
    .map((file) => readFileSync(join('./src/graphql/typeDefs', file), 'utf8')),
]

const server = new ApolloServer({
  resolvers,
  typeDefs,
})
const handler = startServerAndCreateNextHandler(server, {
  context: async (req: any): Promise<any> => {
    await mongoose.connect(process.env.MONGO_DB_URI || '', {})
    const authorization = req.headers.authorization || ''
    const token = authorization.split(' ')[1]
    let session = null
    if (token) {
      try {
        session = jwt.verify(token, process.env.SECRET as string)
      } catch (error) {
        session = null
      }
    }
    return {
      session,
      models,
    }
  },
})

export { handler as GET, handler as POST }
