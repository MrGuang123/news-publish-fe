import urls from '../urls'
import axios from 'axios'

// 遇到import export问题，解决方案博客地址：https://www.jianshu.com/p/ba6f582d5249
export const getNewestList1 = () => {
  return axios({
    method: 'get',
    url: urls.newestNewsList
  })
}

export const getNewsList1 = () => {
  return axios({
    method: 'get',
    url: urls.newsList
  })
}

export default {
  getNewestList1,
  getNewsList1
}