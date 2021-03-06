import { Request, Response } from 'express'

import DocService from 'services/doc.service'

import { NOT_EMPTY } from '@shared/constants'

const getDocs = async (req: Request, res: Response) => {
  const type = req.params.type

  try {
    const docs = await DocService.getDocs(
      type ? { Name: { $regex: NOT_EMPTY }, TYP: type } : { Name: { $regex: NOT_EMPTY } }
    )

    res.json(docs)
  } catch (error) {
    res.status(400).send()
  }
}

const getDocsTypes = async (req: Request, res: Response) => {
  try {
    const docsTypes = await DocService.getDocsTypes({})

    res.json(docsTypes)
  } catch (error) {
    res.status(400).send()
  }
}

const getDocsType = async (req: Request, res: Response) => {
  const code = req.params.code

  try {
    const docsType = await DocService.getDocsType({ KOD: code })

    res.json(docsType)
  } catch (error) {
    res.status(400).send()
  }
}

export default { getDocs, getDocsTypes, getDocsType }
