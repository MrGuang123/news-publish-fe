import { createRouter, createWebHistory } from "vue-router";
import Layout from "../views/Layout/Layout.vue";

import NewsManageRoute from './newsManage'

const routes = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录页'
    },
    hideInMenu: true,
    component: () => import(/* webpackChunkName: "login" */ "../views/Login/Login.vue")
  },
  {
    path: "/",
    name: "Layout",
    meta: {
      icon: 'iconzhanghuzonglan',
      title: '总览'
    },
    component: Layout,
    redict: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        meta: {
          icon: 'iconshouye',
          title: '首页'
        },
        component: () => import(/* webpackChunkName: "home" */ "../views/Home/Home.vue"),
      }
    ]
  },
  ...NewsManageRoute,
  {
    path: '/404',
    name: '404',
    meta: {
      title: '404'
    },
    hideInMenu: true,
    component: () => import(/* webpackChunkName: "404" */ "../views/other/404.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
