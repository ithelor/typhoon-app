import express from 'express'

import CommissionController from 'controllers/commission.controller'

const commissionRouter = express.Router()

commissionRouter.get('/', CommissionController.getCommissions)
commissionRouter.get('/:code', CommissionController.getCommission)

export default commissionRouter
