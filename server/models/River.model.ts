import mongoose from 'mongoose'

import { IRiver } from '@shared/interfaces'

const RiverSchema = new mongoose.Schema<IRiver>(
  {
    KOD: String,
    Name: String,
    Remark: String,
    length: String,
    plain: String,
    rate: String,
    water_content: String
  },
  {
    collection: 'rivers'
  }
)

export default mongoose.model<IRiver>('River', RiverSchema)
