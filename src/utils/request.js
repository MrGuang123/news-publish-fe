import axios from 'axios'
import { message } from 'ant-design-vue';

let baseUrl = process.env.NODE_ENV === 'production' ? '' : ''
// let loading = null

const instance = axios.create({
  timeout: 6000,
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

instance.interceptors.response.use(data => {
  // TODO: 关闭loading
  console.log('responseData', data)
  return data
}, error => {
  // TODO: 错误处理
  // TODO: 错误提示
  // TODO: 关闭loading
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
      resolve(res.data)
    }).catch(err => {
      message.error(err.message)
      reject(err.data)
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
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
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
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
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
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}