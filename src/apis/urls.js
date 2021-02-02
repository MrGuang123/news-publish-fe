const baseUrl = '/api'

/**
 * 登录
 */
const loginUrl = {
  login: `${baseUrl}/auth/login`,
  logout: `${baseUrl}/auth/logout`
}

/**
 * 首页
 */
const homeURLs = {
  newestNewsList: `${baseUrl}/home/newestNewsList`,
  hotNewsList: `${baseUrl}/home/hotNewsList`,
}

/**
 * 新闻管理
 */ 
const newsManage = {
  newsList: `${baseUrl}/news/newsList`,
}

export default {
  ...loginUrl,
  ...homeURLs,
  ...newsManage
}