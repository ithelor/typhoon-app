import express from 'express'

import CASUALModel from '../models/CASUAL.model'

const CASUALRouter = express.Router()

CASUALRouter.get('/', (req, res) => {
  let limit = Number(req.query.limit)

  CASUALModel.find((error, data) => {
    if (error) {
      console.log(`An error occured: ${error}`)
    } else {
      res.json(data)
    }
  }).limit(limit)
})

export default CASUALRouter
