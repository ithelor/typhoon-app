import express from 'express'

import ClassCHSModel from '../models/ClassCHS.model'

const ClassCHSRouter = express.Router()

ClassCHSRouter.get('/', (req, res) => {
  let limit = Number(req.query.limit)

  ClassCHSModel.find((error, data) => {
    if (error) {
      console.log(`An error occured: ${error}`)
    } else {
      res.json(data)
    }
  }).limit(limit)
})

export default ClassCHSRouter
