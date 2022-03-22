import express from 'express'
import mongoose from 'mongoose'

import Regions from '../models/Regions.model'

const regionsRouter = express.Router()

regionsRouter.route('/').get((req, res) => {
  Regions.find({}, { _id: 0 }, (error: any, data: any) => {
    if (error) res.status(400).send('Error fetching regions')
    else res.json(data)
  })
})

export default regionsRouter
