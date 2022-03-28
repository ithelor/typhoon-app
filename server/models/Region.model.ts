import mongoose from 'mongoose'

import { IRegion } from '@shared/interfaces'

const RegionSchema = new mongoose.Schema<IRegion>(
  {
    KOD: { type: String, required: true },
    Name: { type: String, required: true },
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
    collection: 'regions'
  }
)

export default mongoose.model<IRegion>('Region', RegionSchema)
