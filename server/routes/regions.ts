import express from 'express'

import { Contreg, Region } from '@models'

const regionsRouter = express.Router()

// NOTE: can't select() while { _id: 0 }, so map() to omit _id
regionsRouter.route('/').get(async (req, res) => {
  try {
    const regions = (await Region.find({}).orFail().select('KOD Name'))
      .filter((region) => (region.KOD && region.Name ? true : false))
      .map((region) => ({ KOD: region.KOD, Name: region.Name }))

    res.json(regions)
  } catch (error) {
    res.status(400).send()
  }
})

regionsRouter.route('/:code').get(async (req, res) => {
  const code = req.params.code

  try {
    const region = await Region.find({ KOD: code }, { _id: 0 }).orFail()

    res.json(region)
  } catch (error) {
    res.status(400).send()
  }
})

regionsRouter.route('/:code/contreg').get(async (req, res) => {
  const code = req.params.code

  try {
    const codes = (await Contreg.find({ KOD1: code }).orFail()).map((data) => data.KOD2),
      adjacentRegions = (await Region.find({ KOD: { $in: codes } }).orFail()).map(
        (region) => region.Name
      )

    res.json(adjacentRegions)
  } catch (error) {
    res.status(404).send()
  }
})

export default regionsRouter
