const baseUrl = '/api'

// 首页
const homeURLs = {
  newestNewsList: `${baseUrl}/home/newestNewsList`,
  hotNewsList: `${baseUrl}/home/hotNewsList`,
}

// 新闻管理
const newsManage = {
  newsList: `${baseUrl}/news/newsList`,
}

export default {
  ...homeURLs,
  ...newsManage
}