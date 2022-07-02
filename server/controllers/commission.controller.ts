import { Request, Response } from 'express'

import CommissionService from 'services/commission.service'

const getCommissions = async (req: Request, res: Response) => {
  try {
    const commissions = await CommissionService.getCommissions({ reg: { $not: /PRIK/ } })
    res.json(commissions)
  } catch (error) {
    console.log(error)
    res.status(400).send()
  }
}

const getCommission = async (req: Request, res: Response) => {
  const code = req.params.code

  try {
    const commission = await CommissionService.getCommission({ reg: code })
    res.json(commission)
  } catch (error) {
    res.status(400).send()
  }
}

export default { getCommissions, getCommission }
