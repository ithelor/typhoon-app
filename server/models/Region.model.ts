import mongoose from 'mongoose'

import { IRegion } from '@shared/interfaces'

const RegionSchema = new mongoose.Schema<IRegion>(
  {
    KOD: String,
    Name: String,
    RTYPE: String,
    Center: String,
    Remark: String,
    STER: Number,
    RGZ: String,
    SPOP: Number,
    POPULATION: Number,
    ELPOWER: String,
    GAS: String,
    COAL: String,
    OIL: String,
    RAILST: String,
    BUS: String,
    PBUS: String
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    collection: 'regions'
  }
)

RegionSchema.virtual('CenterNpunkt', {
  ref: 'Npunkt',
  localField: 'Center',
  foreignField: 'KOD',
  justOne: true
})

export default mongoose.model<IRegion>('Region', RegionSchema)
