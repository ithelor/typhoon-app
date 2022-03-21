import mongoose from 'mongoose'

const classchsSchema = new mongoose.Schema(
  {
    IST: String,
    KOD: String,
    NAME: String,
    TYPE: Number,
    PARENT: String,
    CHARACT: String
  },
  { collection: 'classchs' }
)

export default mongoose.model('classchs', classchsSchema)
