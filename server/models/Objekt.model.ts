import mongoose from 'mongoose'

import { IObjekt } from '@shared/interfaces'

const ObjektSchema = new mongoose.Schema<IObjekt>(
  {
    KOD: Number,
    NAME: String,
    PUNKT: String,
    ADRESS: String,
    CHAF: String,
    CHAFGO: String,
    TYPOBJ: String,
    HAR: String,
    Remark: String
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    collection: 'objekts'
  }
)

// join by TYPOBJ to get actual data
ObjektSchema.virtual('TypData', {
  ref: 'TypObj',
  localField: 'TYPOBJ',
  foreignField: 'KOD',
  justOne: true
})

export default mongoose.model<IObjekt>('Objekt', ObjektSchema)
