import Layout from '../views/Layout/Layout.vue'

export default [
  {
    path: '/news-analysis',
    name: 'NewsAnalysis',
    meta: {
      title: '新闻统计',
      icon: 'icontongji',
      auth: ['admin']
    },
    component: Layout,
    redirect: '/news-analysis/analysis-index',
    children: [
      {
        path: '/news-analysis/analysis-index',
        name: 'NewsAnalysis',
        meta: {
          icon: 'icontubiaobingzhuangtu',
          title: '统计图表',
          activeMenu: 'analysis-index',
          openMenu: '/news-analysis'
        },
        component: () => import(/* webpackChunkName: 'newsAnalysis' */ '../views/NewsAnalysis/NewsAnalysis.vue')
      }
    ]
  }
]