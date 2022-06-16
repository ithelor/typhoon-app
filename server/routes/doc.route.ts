import express from 'express'

import DocController from 'controllers/doc.controller'

const docRouter = express.Router()

// NOTE: order matters
docRouter.get('/types', DocController.getDocsTypes)
docRouter.get(['/', '/:type'], DocController.getDocs)

export default docRouter
