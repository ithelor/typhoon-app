import express from 'express'

import * as models from '../models'

const dataRouter = express.Router()

dataRouter.get('/', async (req, res) => {
  const target = req.query.target

  if (target) {
    const model = models[target as keyof typeof models]

    model.find({}, { _id: 0 }, (error: any, data: any) => {
      if (error) console.log(`An error occured: ${error}`)
      else res.json(data)
    })
  }
})

export default dataRouter
