import mongoose from 'mongoose'

import { IClassChs } from '@shared/interfaces'

const ClassChsSchema = new mongoose.Schema<IClassChs>(
  {
    IST: String,
    KOD: String,
    NAME: String,
    TYPE: Number,
    PARENT: String,
    CHARACT: String
  },
  { collection: 'classchs' }
)

export default mongoose.model<IClassChs>('ClassChs', ClassChsSchema)
