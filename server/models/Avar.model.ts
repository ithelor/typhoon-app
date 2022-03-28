import mongoose from 'mongoose'

import { IAvar } from '@shared/interfaces'

const AvarSchema = new mongoose.Schema<IAvar>(
  {
    KOD: Number,
    DCAS: Number,
    MON: Number,
    GOD: Number,
    TIMECAS: String,
    REG: String,
    PUNKT: String,
    MESTO: String,
    HAR: String,
    Posl: String,
    Remark: String
  },
  {
    collection: 'avar'
  }
)

export default mongoose.model<IAvar>('Avar', AvarSchema)
