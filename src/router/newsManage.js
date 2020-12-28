import Layout from '../views/Layout/Layout.vue'

export default [
  {
    path: '/news-manage',
    name: 'NewsManage',
    component: Layout,
    redirect: '/news-manage/news-list',
    children: [
      {
        path: 'news-list',
        name: 'NewsList',
        component: import (/* webpackChunkName: 'newsManage' */ '../views/NewsManage/NewsList.vue')
      },
      {
        path: 'news-detail',
        name: 'NewsDetail',
        hideInMenu: true,
        component: import (/* webpackChunkName: 'newsManage' */ '../views/NewsManage/NewsDetail.vue')
      }
    ]
  }
]