import mongoose from 'mongoose'

const avarSchema = new mongoose.Schema(
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
    collection: 'avar'
  }
)

export default mongoose.model('avar', avarSchema)
