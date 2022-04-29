import mongoose from 'mongoose'

import { IF2 } from '@shared/interfaces'

const F2Schema = new mongoose.Schema<IF2>(
  {
    KOD: Number,
    TCHS: Number,
    DAY: Number,
    MON: Number,
    YEAR: Number,
    TIME: String,
    REG: String,
    MESTO: String,
    HARCHS: String,
    P: Number,
    PD: Number,
    PM: Number,
    PMD: Number,
    PTR: Number,
    PTRD: Number,
    Remark: String,
    Size: String,
    Pop: Number,
    Tech: Number,
    PODRAS: String
  },
  {
    collection: 'f2'
  }
)

export default mongoose.model<IF2>('F2', F2Schema)
