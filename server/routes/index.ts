import express from 'express'

import dataRouter from './data'
import regionsRouter from './regions'

const apiRouter = express.Router()

apiRouter.use('/data', dataRouter)
apiRouter.use('/regions', regionsRouter)

export default apiRouter
