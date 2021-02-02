import HomeMethods from './home'
import NewsManage from './newsManage'
import Login from './login'

export default {
  ...Login,
  ...HomeMethods,
  ...NewsManage
}
