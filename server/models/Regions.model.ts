import mongoose from 'mongoose'

const regionsSchema = new mongoose.Schema(
  {
    KOD: String,
    Name: String,
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
