import { Doc, DocsType } from 'models'

import { IDoc } from '@shared/interfaces'

const getDocs = async (query: { TYP?: IDoc['TYP'] }) => {
  try {
    const docs = await Doc.find(query).select('-_id')

    return docs
  } catch (error) {
    throw Error('Error while fetching docs')
  }
}

const getDocsTypes = async (query: {}) => {
  try {
    const docsTypes = await DocsType.find(query).select('-_id').orFail()

    return docsTypes
  } catch (error) {
    throw Error('Error while fetching docs')
  }
}

export default { getDocs, getDocsTypes }
