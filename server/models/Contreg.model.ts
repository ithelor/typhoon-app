import mongoose from 'mongoose'

import { IContreg } from '@shared/interfaces'

const ContregSchema = new mongoose.Schema<IContreg>(
  {
    KOD1: { type: String, required: true },
    KOD2: { type: String, required: true }
  },
  { collection: 'contreg' }
)

export default mongoose.model<IContreg>('Contreg', ContregSchema)
