import mongoose from 'mongoose'

import { IFire } from '@shared/interfaces'

const FireSchema = new mongoose.Schema<IFire>(
  {
    KOD: Number,
    DAY: Number,
    MONTH: Number,
    YEAR: Number,
    FIREDAY: Number,
    FIREYEAR: Number,
    DEADDAY: Number,
    DEADYEAR: Number,
    INJUREDDAY: Number,
    INJUREDYEAR: Number,
    SAVEDDAY: Number,
    SAVEDYEAR: Number,
    SAVEDSTOCK: Number,
    PEOPLEUSED: Number,
    TECHUSED: Number,
    ACTIONS: String,
    BURNDAY: Number,
    BURNYEAR: Number
  },
  {
    collection: 'fire'
  }
)

export default mongoose.model<IFire>('Fire', FireSchema)
