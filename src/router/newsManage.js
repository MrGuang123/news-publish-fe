import Layout from '../views/Layout/Layout.vue'

export default [
  {
    path: '/news-manage',
    name: 'NewsManage',
    meta: {
      title: '新闻管理',
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
          title: '全部新闻',
          activeMenu: 'news-list',
          openMenu: '/news-manage'
        },
        component: () => import(/* webpackChunkName: 'newsManage' */ '../views/NewsManage/NewsList.vue')
      },
      {
        path: '/news-manage/my-news',
        name: 'MyNews',
        meta: {
          icon: 'iconziyuan314',
          title: '我的新闻',
          activeMenu: 'my-news',
          openMenu: '/news-manage'
        },
        component: () => import(/* webpackChunkName: 'newsManage' */ '../views/NewsManage/MyNews.vue')
      },
      {
        path: '/news-manage/news-detail',
        name: 'NewsDetail',
        meta: {
          title: '新闻详情',
          activeMenu: 'news-list',
          openMenu: '/news-manage'
        },
        hideInMenu: true,
        component: () => import(/* webpackChunkName: 'newsManage' */ '../views/NewsManage/NewsDetail.vue')
      }
    ]
  }
]