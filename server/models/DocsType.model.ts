import mongoose from 'mongoose'

import { IDocsType } from '@shared/interfaces'

const DocsTypeSchema = new mongoose.Schema<IDocsType>(
  {
    KOD: String,
    NAME: String
  },
  {
    collection: 'docstype'
  }
)

export default mongoose.model<IDocsType>('DocsType', DocsTypeSchema)
