import express from 'express'

import AVARRouter from './AVAR.routes'
import CASUALRouter from './CASUAL.routes'
import CharCHSRouter from './CharCHS.routes'
import ClassCHSRouter from './ClassCHS.routes'
import CONTREGRouter from './CONTREG.routes'

const apiRouter = express.Router()

apiRouter.use('/avar', AVARRouter)
apiRouter.use('/casual', CASUALRouter)
apiRouter.use('/charchs', CharCHSRouter)
apiRouter.use('/classchs', ClassCHSRouter)
apiRouter.use('/contreg', CONTREGRouter)

export default apiRouter
