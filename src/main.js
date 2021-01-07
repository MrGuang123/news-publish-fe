import Vue from "vue";
import Antd from 'ant-design-vue';
import { Icon } from 'ant-design-vue';

import 'ant-design-vue/dist/antd.css';
import 'normalize.css'

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// 将iconfont注册为antd组件
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2298558_beoral6kb3k.js',
})
Vue.component('icon-font',IconFont)

Vue.use(Antd)

// 当运行serve:mock的时候执行
process.env.VUE_APP_MOCK && require('../Mock')

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
