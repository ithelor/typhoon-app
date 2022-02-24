import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import AvarSchema from './models/Avar.model'

dotenv.config()

const app = express()
app.use(
  cors({
    origin: process.env.CLIENT_URL
  })
)

const PORT = process.env.SERVER_PORT || 8080
const MONGO_URI = process.env.MONGO_URI!

try {
  mongoose
    .connect(MONGO_URI, { useNewUrlParser: true } as mongoose.ConnectOptions)
    .then(() => {
      console.log('Database connected')
      app.listen(PORT, () => console.log(`App is running at ${PORT}..`))
    })
    .catch((error) => console.log(error))
} catch (error: any) {
  console.log('Database connection error', error.message)
}

app.get('/api/avar', (req, res) => {
  AvarSchema.findOne({ MON: 1 }, (error: any, data: any) => {
    if (error) {
      console.log(`An error occured: ${error.res}`)
    } else {
      res.json(data)
    }
  })
})

module.exports = app
