import { AxiosResponse } from 'axios'

import API from 'api/api.instance'

import { IKomiss } from '@shared/interfaces'

export const getCommissions = (): Promise<AxiosResponse<IKomiss[]>> => {
  return API.get(`commissions`)
}

export const getCommission = (code: string): Promise<AxiosResponse<IKomiss[]>> => {
  return API.get(`commissions/${code}`)
}
