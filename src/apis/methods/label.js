import urls from '../urls'
import { aGet, aPost, aPut, aDelete } from '../../utils/request'

export const getLabelList = (params) => {
  return aGet(urls.labelUrl, params)
}

// 获取详情需要有id参数
export const getLabelInfo = (params) => {
  return aGet(urls.labelUrl, params)
}

export const createLabel = (data) => {
  return aPost(urls.labelUrl, data)
}

export const updateLabel = (data) => {
  return aPut(urls.labelUrl, data)
}

export const deleteLabel = (params) => {
  return aDelete(urls.labelUrl, params)
}