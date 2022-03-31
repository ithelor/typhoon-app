import express from 'express'

import { Contreg, Npunkt, Region } from '@models'

const regionsRouter = express.Router()

regionsRouter.route('/').get(async (req, res) => {
  try {
    const regions = await Region.find({
      KOD: { $exists: true, $ne: '' },
      Name: { $exists: true, $ne: '' }
    })
      .select('-_id')
      .orFail()

    res.json(regions)
  } catch (error) {
    res.status(400).send()
  }
})

regionsRouter.route('/:code').get(async (req, res) => {
  const code = req.params.code

  try {
    const region = await Region.findOne({ KOD: code }).select('-_id').orFail()

    res.json(region)
  } catch (error) {
    res.status(400).send()
  }
})

regionsRouter.route('/:code/adjacent').get(async (req, res) => {
  const code = req.params.code

  try {
    const codes = (await Contreg.find({ KOD1: code }).select('-_id KOD2')).map(
      (contreg) => contreg.KOD2
    )

    const adjacent = (await Region.find({ KOD: { $in: codes } })).map((region) => region.Name)

    adjacent.length > 0 ? res.json(adjacent) : res.status(204).send()
  } catch (error) {
    res.status(400).send()
  }
})

regionsRouter.route('/:code/center').get(async (req, res) => {
  const code = req.params.code

  try {
    const currentRegion = await Region.findOne({ KOD: code }).select('-_id Center')
    const center = await Npunkt.findOne({ KOD: currentRegion?.Center }).select('-_id NAME')

    res.json(center?.NAME)
  } catch (error) {
    res.status(400).send()
  }
})

export default regionsRouter
