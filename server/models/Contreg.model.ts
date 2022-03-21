import mongoose from 'mongoose'

const contregSchema = new mongoose.Schema(
  {
    KOD1: String,
    KOD2: String
  },
  { collection: 'contreg' }
)

export default mongoose.model('contreg', contregSchema)
