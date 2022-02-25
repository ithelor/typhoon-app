import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import apiRouter from './api'

dotenv.config()

const app = express()
app.use(
  cors({
    origin: process.env.CLIENT_URL
  })
)
app.use('/api', apiRouter)

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

export default app
