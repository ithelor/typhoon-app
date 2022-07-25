import { Komiss } from 'models'

import { IKomiss } from '@shared/interfaces'

const getCommissions = async (query: {}) => {
  try {
    const commission = await Komiss.find(query).select('-_id -KOD -sot -reg').orFail()

    return commission
  } catch (error) {
    console.log(error)
    throw Error('Error while fetching commissions')
  }
}

const getCommission = async (query: { reg: IKomiss['reg'] }) => {
  try {
    const commission = await Komiss.find(query).select('-_id -KOD -sot -reg')

    return commission
  } catch (error) {
    throw Error('Error while fetching commission')
  }
}

export default { getCommissions, getCommission }
