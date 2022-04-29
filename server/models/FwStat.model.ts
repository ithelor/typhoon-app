import mongoose from 'mongoose'

import { IFwStat } from '@shared/interfaces'

const FwStatSchema = new mongoose.Schema<IFwStat>(
  {
    KOD: Number,
    DAY: Number,
    MON: Number,
    YEAR: Number,
    SUM: Number,
    SW: Number,
    SNW: Number,
    KTA: Number,
    COMM: String
  },
  {
    collection: 'fwstat'
  }
)

export default mongoose.model<IFwStat>('FwStat', FwStatSchema)
