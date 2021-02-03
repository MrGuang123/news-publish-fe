import urls from '../urls' 
import { aGet, aPost, aPut, aDelete} from '../../utils/request'

export const getUserList = (params) => {
  return aGet(urls.userUrl, params)
}

export const getUserInfo = (params) => {
  return aGet(urls.userUrl, params)
}

export const createUser = (data) => {
  return aPost(urls.userUrl, data)
}

export const updateUser = (data) => {
  return aPut(urls.userUrl, data)
}

export const deleteUser = (params) => {
  return aDelete(urls.userUrl, params)
}

// export default {
//   getUserList,
//   getUserInfo,
//   createUser,
//   updateUser,
//   deleteUser
// }