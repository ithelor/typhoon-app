import { Request, Response } from 'express'

import RegionService from 'services/region.service'
import { NOT_EMPTY } from '@shared/constants'

const getRegions = async (req: Request, res: Response) => {
  try {
    const regions = await RegionService.getRegions({
      KOD: { $regex: NOT_EMPTY },
      Name: { $regex: NOT_EMPTY }
    })

    res.json(regions)
  } catch (error) {
    res.status(400).send()
  }
}
const getRegion = async (req: Request, res: Response) => {
  const code = req.params.code

  try {
    const region = await RegionService.getRegion({ KOD: code })
    res.json(region)
  } catch (error) {
    res.status(400).send()
  }
}

const getAdjacent = async (req: Request, res: Response) => {
  const code = req.params.code

  try {
    const adjacent = await RegionService.getAdjacent({ KOD1: code })
    res.json(adjacent)
  } catch (error) {
    res.status(400).send()
  }
}

const getRivers = async (req: Request, res: Response) => {
  const code = req.params.code

  try {
    const riversNames = await RegionService.getRivers({ KODP: code })
    res.json(riversNames)
  } catch (error) {
    res.status(400).send()
  }
}

const getComission = async (req: Request, res: Response) => {
  const code = req.params.code

  try {
    const comission = await RegionService.getComission({ reg: code })
    res.json(comission)
  } catch (error) {
    res.status(400).send()
  }
}

const getChiefs = async (req: Request, res: Response) => {
  const code = req.params.code

  try {
    const chiefs = await RegionService.getChiefs({ reg: code, Name: { $regex: NOT_EMPTY } })
    res.json(chiefs)
  } catch (error) {
    res.status(400).send()
  }
}

const getSettlements = async (req: Request, res: Response) => {
  const code = req.params.code

  try {
    const settlements = await RegionService.getSettlements({ REGION: code })
    res.json(settlements)
  } catch (error) {
    res.status(400).send()
  }
}

const getHazard = async (req: Request, res: Response) => {
  const code = req.params.code

  try {
    const hazard = await RegionService.getHazard({ REGION: code })
    res.json(hazard)
  } catch (error) {
    res.status(400).send()
  }
}

const getDivisions = async (req: Request, res: Response) => {
  const code = req.params.code

  try {
    const divisions = await RegionService.getDivisions({ REGION: code })

    res.json(divisions)
  } catch (error) {
    res.status(400).send()
  }
}

export default {
  getRegions,
  getRegion,
  getAdjacent,
  getRivers,
  getComission,
  getChiefs,
  getSettlements,
  getHazard,
  getDivisions
}
