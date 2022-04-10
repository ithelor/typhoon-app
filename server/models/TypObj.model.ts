import mongoose from 'mongoose'

import { ITypObj } from '@shared/interfaces'

const TypObjSchema = new mongoose.Schema<ITypObj>(
  {
    KOD: String,
    NAME: String
  },
  {
    collection: 'typobj'
  }
)

export default mongoose.model<ITypObj>('TypObj', TypObjSchema)
