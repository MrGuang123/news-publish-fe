import urls from '../urls'
import { aGet, aPost, aPut, aDelete } from '../../utils/request'

const { newsList } = urls

// 遇到import export问题，解决方案博客地址：https://www.jianshu.com/p/ba6f582d5249
export const getNewsList = (params) => {
  return aGet(newsList, params)
}

// 获取详情需要有id参数
export const getNewsInfo = (params) => {
  return aGet(newsList, params)
}

export const createNews = (data) => {
  return aPost(newsList, data)
}

export const updateNews = (data) => {
  return aPut(newsList, data)
}

export const deleteNews = (params) => {
  return aDelete(newsList, params)
}