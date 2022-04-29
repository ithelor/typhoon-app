import mongoose from 'mongoose'

import { IEpidemy } from '@shared/interfaces'

const EpidemySchema = new mongoose.Schema<IEpidemy>(
  {
    KOD: Number,
    DAY: Number,
    MON: Number,
    YEAR: Number,
    COMMENT: String,
    OBST: String
  },
  {
    collection: 'epidemy'
  }
)

export default mongoose.model<IEpidemy>('Epidemy', EpidemySchema)
