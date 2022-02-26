import express from 'express'

import CharCHSModel from '../models/CharCHS.model'

const CharCHSRouter = express.Router()

CharCHSRouter.get('/', (req, res) => {
  let limit = Number(req.query.limit)

  CharCHSModel.find((error, data) => {
    if (error) {
      console.log(`An error occured: ${error}`)
    } else {
      res.json(data)
    }
  }).limit(limit)
})

export default CharCHSRouter
