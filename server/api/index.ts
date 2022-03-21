import express from 'express'

import dataRouter from './Data.routes'

const apiRouter = express.Router()

apiRouter.use('/data', dataRouter)

export default apiRouter
