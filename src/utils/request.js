import axios from 'axios'
import { message } from 'ant-design-vue';
import router from "../router";

let baseUrl = process.env.NODE_ENV === 'production' ? '' : ''
// let loading = null

const instance = axios.create({
  timeout: 15000,
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

instance.interceptors.request.use(config => {
  // TODO: 添加loading
  const token = localStorage.getItem('token')
  if(token) {
    config.headers.authorization = `Bearer ${token}`
  }

  return config
})

instance.interceptors.response.use(response => {
  // TODO: 关闭loading
  const { data } = response
  if(data.code === 403) {
    message.error('权限失效，请重新登录')
    localStorage.removeItem('token')
    localStorage.removeItem('userInfo')
    router.push('/login')
    return Promise.reject(new Error('权限失效'))
  }else if(data.code >= 300) {
    message.error(data.msg || '请求出错')
    return Promise.reject(new Error(data.msg || '请求出错'))
  }else {
    return data
  }
}, error => {
  // TODO: 关闭loading
  message.error(error.message)
  return Promise.reject(error)
})

export const aGet = (url, params = {}) => {
  if(params.id) {
    url = `${url}/${params.id}`
    delete params.id
  }

  return new Promise((resolve, reject) => {
    instance({
      method: 'get',
      url,
      params
    }).then(res => {
      resolve(res)
    }).catch(err => {
      // message.error(err.message)
      reject(err)
    })
  })
}

export const aPost = (url, data) => {
  return new Promise((resolve, reject) => {
    instance({
      method: 'post',
      url,
      data
    }).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

export const aPut = (url, data) => {
  
  return new Promise((resolve, reject) => {
    if(data.id) {
      url = `${url}/${data.id}`
      delete data.id
    }else {
      return reject('缺少需要更新的主体ID')
    }

    instance({
      method: 'put',
      url,
      data
    }).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

export const aDelete = (url, params) => {
  return new Promise((resolve, reject) => {
    if(params.id) {
      url = `${url}/${params.id}`
      delete params.id
    }else {
      return reject('缺少需要删除的主体ID')
    }

    instance({
      method: 'delete',
      url,
      params
    }).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}