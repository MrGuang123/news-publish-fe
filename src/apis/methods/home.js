import urls from '../urls'
import { aGet } from '../../utils/request'

// 遇到import export问题，解决方案博客地址：https://www.jianshu.com/p/ba6f582d5249

const { showData, newestNewsList, hotNewsList } = urls

// 获取首页展示块的数据
export const getShowData = params => {
  return aGet(showData, params)
}

export const getNewestList = params => {
  return aGet(newestNewsList, params)
}

export const getHotNewsList = params => {
  return aGet(hotNewsList, params)
}

export default {
  getShowData,
  getNewestList,
  getHotNewsList
}