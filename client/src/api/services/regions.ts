import API from 'api/api.instance'

import { IDivision, IKomiss, INpunkt, IObjekt, IRegion, ISpop } from '@shared/interfaces'

const getRegions = () => API.get<IRegion[]>(`regions`)

const getRegion = (code: string) => API.get<IRegion>(`regions/${code}`)

const getAdjacent = (code: string) => API.get<string[]>(`regions/${code}/adjacent`)

const getRivers = (code: string) => API.get<string[]>(`regions/${code}/rivers`)

const getKomiss = (code: string) => API.get<IKomiss[]>(`regions/${code}/komiss`)

const getSpop = (code: string) => API.get<ISpop[]>(`regions/${code}/spop`)

const getNpunkts = (code: string) => API.get<INpunkt[]>(`regions/${code}/npunkts`)

const getObjekts = (code: string) => API.get<IObjekt[]>(`regions/${code}/objekts`)

const getDivisions = (code: string) => API.get<IDivision[]>(`regions/${code}/divisions`)

export {
  getRegions,
  getRegion,
  getAdjacent,
  getRivers,
  getKomiss,
  getSpop,
  getNpunkts,
  getObjekts,
  getDivisions
}
