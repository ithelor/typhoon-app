import { AxiosResponse } from 'axios'

import API from 'api/api.instance'

import { IDoc, IDocsType } from '@shared/interfaces'

export const getDocs = (): Promise<AxiosResponse<IDoc[]>> => {
  return API.get(`docs`)
}

export const getDocsByType = (type: string): Promise<AxiosResponse<IDoc[]>> => {
  return API.get(`docs/${type}`)
}

export const getDocsTypes = (): Promise<AxiosResponse<IDocsType[]>> => {
  return API.get(`docs/types`)
}
