import { AxiosResponse } from 'axios'

import API from 'api/api.instance'
import { IKomiss, INpunkt, IRegion, ISpop } from '@shared/interfaces'

export const getRegions = (): Promise<AxiosResponse<IRegion[]>> => {
  return API.get(`regions`)
}

export const getRegion = (code: string): Promise<AxiosResponse<IRegion>> => {
  return API.get(`regions/${code}`)
}

export const getAdjacent = (code: string): Promise<AxiosResponse<string[]>> => {
  return API.get(`regions/${code}/adjacent`)
}

export const getRivers = (code: string): Promise<AxiosResponse<string[]>> => {
  return API.get(`regions/${code}/rivers`)
}

export const getComission = (code: string): Promise<AxiosResponse<IKomiss[]>> => {
  return API.get(`regions/${code}/comission`)
}

export const getChiefs = (code: string): Promise<AxiosResponse<ISpop[]>> => {
  return API.get(`regions/${code}/chiefs`)
}

export const getSettlements = (code: string): Promise<AxiosResponse<INpunkt[]>> => {
  return API.get(`regions/${code}/settlements`)
}

export const getHazard = (code: string): Promise<AxiosResponse<INpunkt[]>> => {
  return API.get(`regions/${code}/hazard`)
}

export const getDivisions = (code: string): Promise<AxiosResponse<INpunkt[]>> => {
  return API.get(`regions/${code}/divisions`)
}
