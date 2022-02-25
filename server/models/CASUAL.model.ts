import mongoose from 'mongoose'

const CASUALSchema = new mongoose.Schema(
  {
    KOD: Number,
    DAY: Number,
    MON: Number,
    YEAR: Number,
    TIMECAS: String,
    REG: String,
    PUNKT: String,
    MESTO: String,
    HARCAS: String,
    TYP: Number,
    SP: Number,
    SPD: Number,
    POG: Number,
    PGD: Number,
    PROP: Number,
    PROPD: Number,
    Work: String,
    Work2: String,
    peop: String,
    tech: String
  },
  {
    collection: 'CASUAL'
  }
)

export default mongoose.model('CASUALSchema', CASUALSchema)
