import express from 'express'

import regionsRouter from './regions'

const apiRouter = express.Router()

apiRouter.use('/regions', regionsRouter)

export default apiRouter
