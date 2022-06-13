import { Request, Response } from 'express'

import DocService from 'services/doc.service'

const getDocs = async (req: Request, res: Response) => {
  const type = req.params.type

  try {
    const docs = await DocService.getDocs(type ? { TYP: type } : {})

    res.json(docs)
  } catch (error) {
    res.status(400).send()
  }
}

export default { getDocs }
