import mongoose from 'mongoose'

const ClassCHSSchema = new mongoose.Schema(
  {
    IST: String,
    KOD: String,
    NAME: String,
    TYPE: Number,
    PARENT: String,
    CHARACT: String
  },
  { collection: 'ClassCHS' }
)

export default mongoose.model('ClassCHSSchema', ClassCHSSchema)
