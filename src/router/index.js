import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import Layout from '../views/Layout/Layout.vue';

import NewsManageRoute from './newsManage'
import UserManage from './userManage'
import LabelManage from './labelManage'
import NewsAnalysis from './newsAnalysis'

// 进度条简单配置
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })

Vue.use(VueRouter);

const originRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originRouterPush.call(this, location).catch(error => error)
}

const routes = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录页'
    },
    hideInMenu: true,
    component: () => import(/* webpackChunkName: "login" */ '../views/Login/Login.vue')
  },
  {
    path: '/',
    // name: 'Layout',
    // meta: {
    //   icon: 'iconzhanghuzonglan',
    //   title: '总览',
    //   auth: ['user', 'admin']
    // },
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        meta: {
          icon: 'iconshouye',
          title: '首页',
          auth: ['user', 'admin'],
          activeMenu: '/home',
          openMenu: '/'
        },
        component: () =>
          import(/* webpackChunkName: "home" */ '../views/Home/Home.vue'),
      }
    ]
  },
  ...NewsManageRoute,
  ...UserManage,
  ...LabelManage,
  ...NewsAnalysis,
  {
    path: '/404',
    name: '404',
    meta: {
      title: '404'
    },
    hideInMenu: true,
    component: () => import(/* webpackChunkName: "404" */ '../views/other/404.vue')
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    NProgress.start()
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router;
