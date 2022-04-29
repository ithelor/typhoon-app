import mongoose from 'mongoose'

import { IFlood } from '@shared/interfaces'

const FloodSchema = new mongoose.Schema<IFlood>(
  {
    KOD: Number,
    DAY: Number,
    MON: Number,
    YEAR: Number,
    TIME: String,
    REG: String,
    MESTO: String,
    SFL: Number,
    UW: Number,
    UWF: Number,
    HAUSE: Number,
    FASEND: Number,
    POG: Number,
    POS: Number,
    EVAK: Number,
    POP: Number,
    TECH: Number,
    OBSTAN: String
  },
  {
    collection: 'flood'
  }
)

export default mongoose.model<IFlood>('Flood', FloodSchema)
