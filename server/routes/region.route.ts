import express from 'express'

import RegionController from 'controllers/region.controller'

const regionsRouter = express.Router()

regionsRouter.get('/', RegionController.getRegions)

regionsRouter.get('/:code', RegionController.getRegion)
regionsRouter.get('/:code/adjacent', RegionController.getAdjacent)
regionsRouter.get('/:code/rivers', RegionController.getRivers)
regionsRouter.get('/:code/comission', RegionController.getComission)
regionsRouter.get('/:code/chiefs', RegionController.getChiefs)
regionsRouter.get('/:code/settlements', RegionController.getSettlements)
regionsRouter.get('/:code/hazard', RegionController.getHazard)
regionsRouter.get('/:code/divisions', RegionController.getDivisions)

export default regionsRouter
