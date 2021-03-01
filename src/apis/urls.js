// const baseUrl = '/api'
const baseUrl = 'http://localhost:3000/api'

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
  showData: `${baseUrl}/show-data`,
  newestNewsList: `${baseUrl}/newest-news`,
  hotNewsList: `${baseUrl}/hot-news`,
}

/**
 * 新闻管理
 */ 
const newsManage = {
  newsList: `${baseUrl}/news`,
  uploadImage: `${baseUrl}/upload-image`
}

/**
 * 用户管理
 */
const userManage = {
  userUrl: `${baseUrl}/users`
}

/**
 * 标签管理
 */
const LabelManage = {
  labelUrl: `${baseUrl}/labels`
}

export default {
  ...loginUrl,
  ...homeURLs,
  ...newsManage,
  ...userManage,
  ...LabelManage
}