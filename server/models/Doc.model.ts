import mongoose from 'mongoose'

import { IDoc } from '@shared/interfaces'

const DocSchema = new mongoose.Schema<IDoc>(
  {
    KOD: Number,
    Name: String,
    SRC: String,
    TYP: String
  },
  {
    collection: 'docs'
  }
)

export default mongoose.model<IDoc>('Doc', DocSchema)
