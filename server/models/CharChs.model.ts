import mongoose from 'mongoose'

import { ICharChs } from '@shared/interfaces'

const CharChsSchema = new mongoose.Schema<ICharChs>(
  {
    Kod1: String,
    Kod2: String
  },
  { collection: 'charchs' }
)

export default mongoose.model<ICharChs>('CharChs', CharChsSchema)
