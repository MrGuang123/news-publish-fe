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
      title: 'route.loginPage'
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
          title: 'route.home',
          auth: ['user', 'admin'],
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
    path: '*',
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

  const token = localStorage.getItem('token')
  // 如果有token，要去登录页会转到首页，要去其它页面直接放行
  // 如果没有token，要去登录页放行，要去其它页面会转到登录页
  if(token) {
    if(to.path === '/login') {
      next('/')
    }else {
      next()
    }
  }else {
    if(to.path === '/login') {
      next()
    }else {
      next('/login')
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})

export default router;
