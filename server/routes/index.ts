import express from 'express'

import commissionRouter from './commission.route'
import docsRouter from './doc.route'
import regionsRouter from './region.route'

const apiRouter = express.Router()

apiRouter.use('/commissions', commissionRouter)
apiRouter.use('/docs', docsRouter)
apiRouter.use('/regions', regionsRouter)

export default apiRouter
