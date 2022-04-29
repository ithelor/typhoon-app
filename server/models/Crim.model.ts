import mongoose from 'mongoose'

import { ICrim } from '@shared/interfaces'

const CrimSchema = new mongoose.Schema<ICrim>(
  {
    KOD: Number,
    DAY: Number,
    MONTH: Number,
    YEAR: Number,
    MURDDAY: Number,
    MURDYEAR: Number,
    DELMURDDAY: Number,
    DELMURDYEAR: Number,
    RASMURDDAY: Number,
    RASMURDYEAR: Number,
    BALANCEMURDDAY: Number,
    BALANCEMURDYEAR: Number,
    QUANTITYDAY: Number,
    QUANTITYYEAR: Number,
    NEWCAUSDAY: Number,
    NEWCAUSYEAR: Number,
    RASCAUSDAY: Number,
    RASCAUSYEAR: Number,
    BALANCECAUSDAY: Number,
    BALANCECAUSYEAR: Number
  },
  {
    collection: 'crim'
  }
)

export default mongoose.model<ICrim>('Crim', CrimSchema)
