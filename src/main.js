import { createApp } from "vue";
import Antd from 'ant-design-vue';

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import 'ant-design-vue/dist/antd.css';
import 'normalize.css'

import { createFromIconfontCN } from '@ant-design/icons-vue'

// 将iconfont注册为antd组件
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2298558_xud0lh0vztm.js',
})

const app = createApp(App)

app.component('icon-font', IconFont)
app.use(store)
  .use(router)
  .use(Antd)
  .mount("#app");
