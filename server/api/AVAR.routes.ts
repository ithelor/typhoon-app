import express from 'express'

import AVARSchema from '../models/AVAR.model'

const AVARRouter = express.Router()

AVARRouter.get('/', (req, res) => {
  AVARSchema.findOne({ MON: 1 }, (error: any, data: any) => {
    if (error) {
      console.log(`An error occured: ${error.res}`)
    } else {
      res.json(data)
    }
  })
})

export default AVARRouter
