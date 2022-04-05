import mongoose from 'mongoose'

import { IKomiss } from '@shared/interfaces'

const KomissSchema = new mongoose.Schema<IKomiss>(
  {
    KOD: Number,
    Name: String,
    WORK: String,
    prio: Number,
    PHONE: String,
    home: String,
    sot: String,
    reg: String
  },
  {
    collection: 'komiss'
  }
)

export default mongoose.model<IKomiss>('Komiss', KomissSchema)
