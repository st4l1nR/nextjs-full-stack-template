import { Resolvers } from '@/types/graphql'
import mongoQuery from '@/utils/mongoQuery'
import { GraphQLError } from 'graphql'

export const bookQueries: Resolvers['Query'] = {
  getBookById: async (_, { _id }, { models, session }) => {
    if (!session)
      throw new GraphQLError('Not authorized', {
        extensions: {
          status: 401,
        },
      })
    return await models.Book.findOne({ _id })
  },
  listBook: async (_, { paginate, query }, { models, session }) => {
    if (!session)
      throw new GraphQLError('Not authorized', {
        extensions: {
          status: 401,
        },
      })
    return await models.Book.paginate({ ...mongoQuery(query) }, paginate)
  },
}

export const bookMutations: Resolvers['Mutation'] = {
  createBook: async (_, { createBookInput: args }, { models, session }) => {
    if (!session)
      throw new GraphQLError('Not authorized', {
        extensions: {
          status: 401,
        },
      })
    const newBook = new models.Book(args)
    await newBook.save()
    return newBook.toObject()
  },
  updateBook: async (
    _,
    { updateBookInput: { _id, ...args } },
    { models, session },
  ) => {
    if (!session)
      throw new GraphQLError('Not authorized', {
        extensions: {
          status: 401,
        },
      })
    return await models.Book.findByIdAndUpdate(_id, args, { new: true })
  },
  deleteBook: async (_, { _id }, { models, session }) => {
    if (!session)
      throw new GraphQLError('Not authorized', {
        extensions: {
          status: 401,
        },
      })
    return await models.Book.findByIdAndDelete(_id)
  },
}
