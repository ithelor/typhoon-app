import API from 'api/api.instance'

import { IRegion } from '@shared/interfaces'

const getRegions = () => API.get<IRegion[]>(`regions`),
  getRegion = (id: string) => API.get<IRegion>(`regions/${id}`),
  getAdjacent = (id: string) => API.get<string[]>(`regions/${id}/contreg`)

export { getRegions, getRegion, getAdjacent }
