import express from 'express'

import AVARModel from '../models/AVAR.model'

const AVARRouter = express.Router()

AVARRouter.get('/', (req, res) => {
  let limit = Number(req.query.limit)

  AVARModel.find((error: any, data: any) => {
    if (error) {
      console.log(`An error occured: ${error}`)
    } else {
      res.json(data)
    }
  }).limit(limit)
})

export default AVARRouter
