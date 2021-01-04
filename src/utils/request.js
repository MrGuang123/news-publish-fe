import axios from 'axios'

let baseUrl = process.env.NODE_ENV === 'production' ? '' : ''
let loading = null

const instance = axios.create({
  timeout: 6000,
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

instance.interceptors.request.use(config => {
  // TODO: 添加loading
  return config
})

instance.interceptors.response.use(data => {
  // TODO: 关闭loading
  return data
}, error => {
  // TODO: 错误处理
  // TODO: 错误提示
  // TODO: 关闭loading
  return Promise.reject(error)
})

