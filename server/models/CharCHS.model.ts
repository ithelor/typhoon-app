import mongoose from 'mongoose'

const charchsSchema = new mongoose.Schema(
  {
    Kod1: String,
    Kod2: String
  },
  { collection: 'charchs' }
)

export default mongoose.model('charchs', charchsSchema)
