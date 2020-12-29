import Layout from '../views/Layout/Layout.vue'

export default [
  {
    path: '/news-manage',
    name: 'NewsManage',
    meta: {
      title: '新闻管理',
      icon: 'iconxinwen'
    },
    component: Layout,
    redirect: '/news-manage/news-list',
    children: [
      {
        path: 'news-list',
        name: 'NewsList',
        meta: {
          icon: 'iconliebiao',
          title: '新闻列表'
        },
        component: import(/* webpackChunkName: 'newsManage' */ '../views/NewsManage/NewsList.vue')
      },
      {
        path: 'news-detail',
        name: 'NewsDetail',
        meta: {
          title: '新闻详情'
        },
        hideInMenu: true,
        component: import(/* webpackChunkName: 'newsManage' */ '../views/NewsManage/NewsDetail.vue')
      }
    ]
  }
]