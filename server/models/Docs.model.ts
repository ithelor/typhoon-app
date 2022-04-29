import mongoose from 'mongoose'

import { IDocs } from '@shared/interfaces'

const DocsSchema = new mongoose.Schema<IDocs>(
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

export default mongoose.model<IDocs>('Docs', DocsSchema)
