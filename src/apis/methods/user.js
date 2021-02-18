import urls from '../urls' 
import { aGet, aPost, aPut, aDelete} from '../../utils/request'

const { userUrl } = urls

export const getUserList = (params) => {
  return aGet(userUrl, params)
}

export const getUserInfo = (params) => {
  return aGet(userUrl, params)
}

export const createUser = (data) => {
  return aPost(userUrl, data)
}

export const updateUser = (data) => {
  return aPut(userUrl, data)
}

export const deleteUser = (params) => {
  return aDelete(userUrl, params)
}