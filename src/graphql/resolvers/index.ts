import { Resolvers } from '@/types/graphql'
import { dateScalar } from './scalars'
import { bookQueries, bookMutations } from './book'

export default {
  Date: dateScalar,
  Query: {
    ...bookQueries,
  },
  Mutation: {
    ...bookMutations,
  },
} as Resolvers
