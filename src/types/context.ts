import { Model } from 'mongoose'
import { BookDbObject } from '@/types/graphql'

export type Session = {
  _id: string
  name: string
  email: string
  role: any
}
export type DataSourceContext = {
  session: Session
  models: {
    Book: Model<BookDbObject> & { paginate: any }
  }
}
