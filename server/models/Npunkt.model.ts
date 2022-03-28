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
  { collection: 'npunkt' }
)

export default mongoose.model<INpunkt>('Npunkt', NpunktSchema)
