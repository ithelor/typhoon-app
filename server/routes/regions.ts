import express from 'express'

import { Contreg, Komiss, Npunkt, Region, River, RiverReg, Spop } from '@models'
import { NOT_EMPTY } from '@shared/constants'

// TODO: populate() the remaining models
const regionsRouter = express.Router()

regionsRouter.route('/').get(async (req, res) => {
  try {
    const regions = await Region.find({
      KOD: { $regex: NOT_EMPTY },
      Name: { $regex: NOT_EMPTY }
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
    const region = await Region.findOne({ KOD: code })
      .lean()
      .populate({
        path: 'CenterNpunkt',
        select: '-_id'
      })
      .select('-_id')
      .orFail()

    res.json(region)
  } catch (error) {
    res.status(400).send()
  }
})

regionsRouter.route('/:code/adjacent').get(async (req, res) => {
  const code = req.params.code

  try {
    const contregsToRegion = await Contreg.find({ KOD1: code }).select('-_id KOD2')
    const contregsCodes = contregsToRegion.map((contreg) => contreg.KOD2)

    const adjacent = await Region.find({ KOD: { $in: contregsCodes } })
    const adjacentNames = adjacent.map((region) => region.Name)

    adjacentNames.length > 0 ? res.json(adjacentNames) : res.status(204).send()
  } catch (error) {
    res.status(400).send()
  }
})

regionsRouter.route('/:code/rivers').get(async (req, res) => {
  const code = req.params.code

  try {
    const riverregsToRegion = await RiverReg.find({ KODP: code }).select('-_id KODR')
    const riverregsCodes = riverregsToRegion.map((riverreg) => riverreg.KODR)

    const rivers = await River.find({ KOD: { $in: riverregsCodes } }).select('-_id Name Remark')

    res.json(rivers)
  } catch (error) {
    res.status(400).send()
  }
})

regionsRouter.route('/:code/komiss').get(async (req, res) => {
  const code = req.params.code

  try {
    const komiss = await Komiss.find({ reg: code })

    res.json(komiss)
  } catch (error) {
    res.status(400).send()
  }
})

regionsRouter.route('/:code/spop').get(async (req, res) => {
  const code = req.params.code

  try {
    const spop = await Spop.find({
      reg: code,
      Name: { $regex: NOT_EMPTY }
    }).select('-_id')

    res.json(spop)
  } catch (error) {
    res.status(400).send()
  }
})

regionsRouter.route('/:code/npunkts').get(async (req, res) => {
  const code = req.params.code

  try {
    const npunkts = await Npunkt.find({ REGION: code })
      .lean()
      .populate({ path: 'pstatus', select: '-_id -KOD Name' })
      .select('-_id KOD NAME STATUS PEOPLE')

    res.json(npunkts)
  } catch (error) {
    res.status(400).send()
  }
})

export default regionsRouter
