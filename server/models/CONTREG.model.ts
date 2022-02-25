import mongoose from 'mongoose'

const CONTREGSchema = new mongoose.Schema(
  {
    KOD1: String,
    KOD2: String
  },
  { collection: 'CONTREG' }
)

export default mongoose.model('CONTREGSchema', CONTREGSchema)
