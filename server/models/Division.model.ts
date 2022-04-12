import mongoose from 'mongoose'

import { IDivision } from '@shared/interfaces'

const DivisionSchema = new mongoose.Schema<IDivision>(
  {
    KOD: Number,
    NAME: String,
    Region: String,
    PUNKT: String,
    ADRESS: String,
    CHAF: String,
    CHAFGO: String,
    TYPSS: String,
    POPUL: Number,
    TECHNIK: Number,
    TREADY: String,
    REMARK: Number,
    HAR: String
  },
  {
    collection: 'divisions'
  }
)

// join by TYPSS to get actual data
DivisionSchema.virtual('TypData', {
  ref: 'Typss',
  localField: 'TYPSS',
  foreignField: 'KOD',
  justOne: true
})

export default mongoose.model<IDivision>('Division', DivisionSchema)
