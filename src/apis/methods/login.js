import urls from '../urls'
import { aGet, aPost } from '../../utils/request'

export const login = (data) => {
  return aPost(urls.login, data)
}

export const logout = (params) => {
  return aGet(urls.logout, params)
}
