import mongoose from 'mongoose'

const CharCHSSchema = new mongoose.Schema(
  {
    Kod1: String,
    Kod2: Number
  },
  { collection: 'CharCHS' }
)

export default mongoose.model('CharCHSModel', CharCHSSchema)
