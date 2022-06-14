import { Doc } from 'models'

import { IDoc } from '@shared/interfaces'

const getDocs = async (query: { TYP?: IDoc['TYP'] }) => {
  try {
    const docs = await Doc.find(query).select('-_id')

    return docs
  } catch (error) {
    throw Error('Error while fetching docs')
  }
}

export default { getDocs }
