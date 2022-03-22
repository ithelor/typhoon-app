import mongoose from 'mongoose'

const contregSchema = new mongoose.Schema(
  {
    KOD1: { type: String, required: true },
    KOD2: { type: String, required: true }
  },
  { collection: 'contreg' }
)

export default mongoose.model('contreg', contregSchema)
