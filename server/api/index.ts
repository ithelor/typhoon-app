import express from 'express'

import avarRouter from './AVAR.routes'

const apiRouter = express.Router()

apiRouter.use('/avar', avarRouter)

export default apiRouter
