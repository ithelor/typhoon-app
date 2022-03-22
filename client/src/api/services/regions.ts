import API from 'api/api.instance'

export const getRegions = () => API.get(`api/regions`)
