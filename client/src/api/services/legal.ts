import { AxiosResponse } from 'axios'

import API from 'api/api.instance'

import { IDoc } from '@shared/interfaces'

export const getDocs = (): Promise<AxiosResponse<IDoc[]>> => {
  return API.get(`docs`)
}

export const getDocsByType = (type: string): Promise<AxiosResponse<IDoc[]>> => {
  return API.get(`docs/${type}`)
}
