import { createApp } from "vue";
import Antd from 'ant-design-vue';

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import 'ant-design-vue/dist/antd.css';
import 'normalize.css'

import { createFromIconfontCN } from '@ant-design/icons-vue'

// 按需引入echarts
// 必须使用require方式引入echarts，import方式报错，词云需要在具体组件引入
// const echarts = require('echarts')
// require('echarts/theme/macarons')

// require('echarts-wordcloud')
// require('echarts/lib/chart/bar')
// require('echarts/lib/chart/line')
// require('echarts/lib/component/tooltip')
// require('echarts/lib/component/title')

// 将iconfont注册为antd组件
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2298558_1v9oy4jabg4.js',
})

// console.log(echarts)
console.log(process.env.VUE_APP_MOCK)
process.env.VUE_APP_MOCK && require('../Mock')

const app = createApp(App)

// v3将Vue.prototype改为app.config.globalProperties
// app.config.globalProperties.echarts = echarts
app.component('icon-font', IconFont)
app.use(store)
  .use(router)
  .use(Antd)
  .mount("#app");


  // https://blog.csdn.net/qq_41056506/article/details/81878812