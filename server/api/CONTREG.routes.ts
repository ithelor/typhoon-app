import express from 'express'

import CONTREGModel from '../models/CONTREG.model'

const CONTREGRouter = express.Router()

CONTREGRouter.get('/', (req, res) => {
  let limit = Number(req.query.limit)

  CONTREGModel.find((error, data) => {
    if (error) {
      console.log(`An error occured: ${error}`)
    } else {
      res.json(data)
    }
  }).limit(limit)
})

export default CONTREGRouter
