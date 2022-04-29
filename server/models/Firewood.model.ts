import mongoose from 'mongoose'

import { IFirewood } from '@shared/interfaces'

const FirewoodSchema = new mongoose.Schema<IFirewood>(
  {
    KOD: Number,
    DAY: Number,
    MON: Number,
    YEAR: Number,
    REG: String,
    MESTO: String,
    TYPE: Number,
    DS: Number,
    LS: Number,
    ES: Number,
    SS: Number,
    POP: Number,
    TECH: Number,
    parent: Number,
    isdan: Boolean
  },
  {
    collection: 'firewood'
  }
)

export default mongoose.model<IFirewood>('Firewood', FirewoodSchema)
