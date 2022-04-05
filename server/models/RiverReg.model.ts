import mongoose from 'mongoose'

import { IRiverReg } from '@shared/interfaces'

const RiverRegSchema = new mongoose.Schema<IRiverReg>(
  {
    KODR: String,
    KODP: String
  },
  {
    collection: 'riverreg'
  }
)

export default mongoose.model<IRiverReg>('RiverReg', RiverRegSchema)
