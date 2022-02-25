import mongoose from 'mongoose'

const AVARSchema = new mongoose.Schema(
  {
    KOD: Number,
    DCAS: Number,
    MON: Number,
    GOD: Number,
    TIMECAS: String,
    REG: String,
    PUNKT: String,
    MESTO: String,
    HAR: String,
    Posl: String,
    Remark: String
  },
  {
    collection: 'AVAR'
  }
)

export default mongoose.model('AVARSchema', AVARSchema)
