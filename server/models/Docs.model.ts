import mongoose from 'mongoose'

import { IDoc } from '@shared/interfaces'

const DocsSchema = new mongoose.Schema<IDoc>(
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

export default mongoose.model<IDoc>('Docs', DocsSchema)
