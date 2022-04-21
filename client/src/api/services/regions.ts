import { AxiosResponse } from 'axios'

import API from 'api/api.instance'
import { IDivision, IKomiss, INpunkt, IObjekt, IRegion, ISpop } from '@shared/interfaces'

const getRegions = (): Promise<AxiosResponse<IRegion[]>> => {
  return API.get(`regions`)
}

const getRegion = (code: string): Promise<AxiosResponse<IRegion>> => {
  return API.get(`regions/${code}`)
}

const getAdjacent = (code: string): Promise<AxiosResponse<string[]>> => {
  return API.get(`regions/${code}/adjacent`)
}

const getRivers = (code: string): Promise<AxiosResponse<string[]>> => {
  return API.get(`regions/${code}/rivers`)
}

const getComission = (code: string): Promise<AxiosResponse<IKomiss[]>> => {
  return API.get(`regions/${code}/comission`)
}

const getChiefs = (code: string): Promise<AxiosResponse<ISpop[]>> => {
  return API.get(`regions/${code}/chiefs`)
}

const getSettlements = (code: string): Promise<AxiosResponse<INpunkt[]>> => {
  return API.get(`regions/${code}/settlements`)
}

const getHazard = (code: string): Promise<AxiosResponse<IObjekt[]>> => {
  return API.get(`regions/${code}/hazard`)
}

const getDivisions = (code: string): Promise<AxiosResponse<IDivision[]>> => {
  return API.get(`regions/${code}/divisions`)
}

export {
  getRegions,
  getRegion,
  getAdjacent,
  getRivers,
  getComission,
  getChiefs,
  getSettlements,
  getHazard,
  getDivisions
}
