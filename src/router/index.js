import { createRouter, createWebHistory } from "vue-router";
import Layout from "../views/Layout/Layout.vue";

const routes = [
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
