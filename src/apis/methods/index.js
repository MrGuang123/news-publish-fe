import HomeMethods from './home'
import NewsManage from './newsManage'

console.log('methods', HomeMethods)
export default {
  ...HomeMethods,
  ...NewsManage
}
