import API from 'api/api.instance'

export const get = (url: string) => API.get(`api/${url}`)
