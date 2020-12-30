import urls from '../urls'
import axios from 'axios'

// 遇到import export问题，解决方案博客地址：https://www.jianshu.com/p/ba6f582d5249
export const getNewestList = () => {
  return axios({
    method: 'get',
    url: urls.newestNewsList
  })
}

export const getNewsList = () => {
  return axios({
    method: 'get',
    url: urls.newsList
  })
}

export default {
  getNewestList,
  getNewsList
}