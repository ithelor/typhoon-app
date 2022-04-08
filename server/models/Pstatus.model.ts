import mongoose from 'mongoose'

import { IPstatus } from '@shared/interfaces'

const PstatusSchema = new mongoose.Schema<IPstatus>(
  {
    KOD: String,
    Name: String,
    Attribute: String
  },
  {
    collection: 'pstatus'
  }
)

export default mongoose.model<IPstatus>('Pstatus', PstatusSchema)
