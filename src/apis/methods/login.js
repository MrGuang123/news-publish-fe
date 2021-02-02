import urls from '../urls'
import { aGet, aPost } from '../../utils/request'

const login = (data) => {
  return aPost(urls.login, data)
}

const logout = (params) => {
  return aGet(urls.logout, params)
}

export default {
  login,
  logout
}