import express from 'express'

import regionsRouter from './region.route'

const apiRouter = express.Router()

apiRouter.use('/regions', regionsRouter)

export default apiRouter
