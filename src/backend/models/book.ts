import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'
import mongooseAutopopulate from 'mongoose-autopopulate'
import { BookDbObject } from '@/types/graphql'
const bookSchema = new mongoose.Schema<BookDbObject>(
  {
    name: String,
  },
  { timestamps: true },
)
bookSchema.plugin(mongoosePaginate)
bookSchema.plugin(mongooseAutopopulate)

export default mongoose.models.Book || mongoose.model('Book', bookSchema)
