import urls from '../urls'
import { aGet, aPost, aPut, aDelete } from '../../utils/request'

const { labelUrl } = urls

export const getLabelList = (params) => {
  return aGet(labelUrl, params)
}

// 获取详情需要有id参数
export const getLabelInfo = (params) => {
  return aGet(labelUrl, params)
}

export const createLabel = (data) => {
  return aPost(labelUrl, data)
}

export const updateLabel = (data) => {
  return aPut(labelUrl, data)
}

export const deleteLabel = (params) => {
  return aDelete(labelUrl, params)
}