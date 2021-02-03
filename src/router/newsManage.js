import Layout from '../views/Layout/Layout.vue'

export default [
  {
    path: '/news-manage',
    name: 'NewsManage',
    meta: {
      title: 'route.newsManage',
      icon: 'iconxinwen',
      auth: ['admin']
    },
    component: Layout,
    redirect: '/news-manage/news-list',
    children: [
      {
        path: '/news-manage/news-list',
        name: 'NewsList',
        meta: {
          icon: 'iconliebiao',
          title: 'route.newsManage_allNews',
        },
        component: () => import(/* webpackChunkName: 'newsManage' */ '../views/NewsManage/NewsList.vue')
      },
      {
        path: '/news-manage/my-news',
        name: 'MyNews',
        meta: {
          icon: 'iconziyuan314',
          title: 'route.newsManage_myNews',
        },
        component: () => import(/* webpackChunkName: 'newsManage' */ '../views/NewsManage/MyNews.vue')
      },
      {
        path: '/news-manage/create-news',
        name: 'NewsDetail',
        hideInMenu: true,
        selectOtherPath: true,
        meta: {
          title: 'route.newsManage_createNews',
          selectedPath: '/news-manage/my-news',
          openedPath: '/news-manage'
        },
        component: () => import(/* webpackChunkName: 'newsManage' */ '../views/NewsManage/CreateNews.vue')
      }
    ]
  }
]