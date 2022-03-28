import mongoose from 'mongoose'

import { ICasual } from '@shared/interfaces'

const CasualSchema = new mongoose.Schema<ICasual>(
  {
    KOD: Number,
    DAY: Number,
    MON: Number,
    YEAR: Number,
    TIMECAS: String,
    REG: String,
    PUNKT: String,
    MESTO: String,
    HARCAS: String,
    TYP: Number,
    SP: Number,
    SPD: Number,
    POG: Number,
    PGD: Number,
    PROP: Number,
    PROPD: Number,
    Work: String,
    Work2: String,
    peop: String,
    tech: String
  },
  {
    collection: 'casual'
  }
)

export default mongoose.model<ICasual>('Casual', CasualSchema)
