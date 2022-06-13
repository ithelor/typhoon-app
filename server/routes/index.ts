import express from 'express'

import docsRouter from './doc.route'
import regionsRouter from './region.route'

const apiRouter = express.Router()

apiRouter.use('/docs', docsRouter)
apiRouter.use('/regions', regionsRouter)

export default apiRouter
