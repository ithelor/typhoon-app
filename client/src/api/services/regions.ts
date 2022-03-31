import API from 'api/api.instance'

import { IRegion } from '@shared/interfaces'

const getRegions = () => API.get<IRegion[]>(`regions`)
const getRegion = (id: string) => API.get<IRegion>(`regions/${id}`)
const getAdjacent = (id: string) => API.get<string[]>(`regions/${id}/adjacent`)
const getCenter = (id: string) => API.get<string>(`regions/${id}/center`)

export { getRegions, getRegion, getAdjacent, getCenter }
