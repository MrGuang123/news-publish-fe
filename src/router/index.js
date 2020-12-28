import { createRouter, createWebHistory } from "vue-router";
import Layout from "../views/Layout/Layout.vue";

import NewsManageRoute from './newsManage'

const routes = [
  {
    path: '/login',
    name: 'Login',
    hideInMenu: true,
    component: () => import (/* webpackChunkName: "login" */ "../views/Login/Login.vue")
  },
  {
    path: "/",
    name: "Layout",
    component: Layout,
    redict: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ "../views/Home/Home.vue"),
      }
    ]
  },
  ...NewsManageRoute,
  {
    path: '/404',
    name: '404',
    hideInMenu: true,
    component: () => import(/* webpackChunkName: "404" */ "../views/other/404.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
