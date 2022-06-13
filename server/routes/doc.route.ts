import express from 'express'

import DocController from 'controllers/doc.controller'

const docRouter = express.Router()

docRouter.get(['/', '/:type'], DocController.getDocs)

export default docRouter
