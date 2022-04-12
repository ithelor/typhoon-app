import mongoose from 'mongoose'

import { ITypss } from '@shared/interfaces'

const TypssSchema = new mongoose.Schema<ITypss>(
  {
    KOD: String,
    NAME: String
  },
  {
    collection: 'typss'
  }
)

export default mongoose.model<ITypss>('Typss', TypssSchema)
