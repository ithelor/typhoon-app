import mongoose from 'mongoose'

import { INpunkt } from '@shared/interfaces'

const NpunktSchema = new mongoose.Schema<INpunkt>(
  {
    KOD: String,
    NAME: String,
    REGION: String,
    STATUS: String,
    PEOPLE: Number,
    STER: String,
    COAL: String,
    OIL: String,
    DIZT: String,
    EL: String,
    RGZ: String,
    RAILST: String,
    Glava: String,
    BUS: String,
    PBUS: String
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    collection: 'npunkt'
  }
)

NpunktSchema.virtual('pstatus', {
  ref: 'Pstatus',
  localField: 'STATUS',
  foreignField: 'KOD',
  justOne: true
})

export default mongoose.model<INpunkt>('Npunkt', NpunktSchema)
