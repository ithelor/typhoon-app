import mongoose from 'mongoose'

import { IPunkt } from '@shared/interfaces'

const PunktSchema = new mongoose.Schema<IPunkt>(
  {
    KOD: String,
    NAME: String,
    Carpunkt: String,
    ZDpunkt: String,
    REGION: String,
    NPunkt: String
  },
  {
    collection: 'punkt'
  }
)

export default mongoose.model<IPunkt>('Punkt', PunktSchema)
