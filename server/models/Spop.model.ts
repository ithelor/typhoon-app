import mongoose from 'mongoose'

import { ISpop } from '@shared/interfaces'

const SpopSchema = new mongoose.Schema<ISpop>(
  {
    KOD: Number,
    WORK: String,
    Name: String,
    PHONE: String,
    TPRI: String,
    fax: String,
    sot: String,
    MIAL: String,
    home: String,
    prio: Number,
    reg: String
  },
  {
    collection: 'spop'
  }
)

export default mongoose.model<ISpop>('Spop', SpopSchema)
