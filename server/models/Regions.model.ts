import mongoose from 'mongoose'

const regionsSchema = new mongoose.Schema(
  {
    KOD: { type: String, required: true },
    Name: { type: String, required: true },
    RTYPE: String,
    Center: String,
    Remark: String,
    STER: Number,
    RGZ: String,
    SPOP: Number,
    POPULATION: Number,
    ELPOWER: String,
    GAS: String,
    COAL: String,
    OIL: String,
    RAILST: String,
    BUS: String,
    PBUS: String
  },
  {
    collection: 'regions'
  }
)

export default mongoose.model('regions', regionsSchema)
