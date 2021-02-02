import Vue from "vue";
import Antd from 'ant-design-vue';
import { Icon, FormModel } from 'ant-design-vue';
import VueI18n from 'vue-i18n'
import queryString from 'query-string'

import 'ant-design-vue/dist/antd.css';
import 'normalize.css'

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import enUS from './locale/enUS'
import zhCN from './locale/zhCN'

// 将iconfont注册为antd组件
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2298558_beoral6kb3k.js',
})
Vue.component('icon-font', IconFont)

Vue.use(Antd)
// 使用表单的双向绑定还得单独弄个模块，服气了。。。
Vue.use(FormModel)
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: queryString.parse(location.search).locale || 'zhCN',
  messages: {
    zhCN: {
      message: zhCN
    },
    enUS: {
      message: enUS
    }
  }
})

// 当运行serve:mock的时候执行
process.env.VUE_APP_MOCK && require('../Mock')

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
