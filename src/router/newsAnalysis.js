import Layout from '../views/Layout/Layout.vue'

export default [
  {
    path: '/news-analysis',
    name: 'NewsAnalysis',
    meta: {
      title: 'route.newsAnalysis',
      icon: 'icontongji',
      auth: ['admin']
    },
    component: Layout,
    redirect: '/news-analysis/analysis-index',
    children: [
      {
        path: '/news-analysis/analysis-index',
        name: 'AnalysisIndex',
        meta: {
          icon: 'icontubiaobingzhuangtu',
          title: 'route.newsAnalysis_chart'
        },
        component: () => import(/* webpackChunkName: 'newsAnalysis' */ '../views/NewsAnalysis/NewsAnalysis.vue')
      },
      {
        path: '/news-analysis/news-map',
        name: 'NewsMap',
        meta: {
          icon: 'icontubiao_ditu',
          title: 'route.newsAnalysis_map'
        },
        component: () => import(/* webpackChunkName: 'newsAnalysis' */ '../views/NewsAnalysis/NewsMap.vue')
      },
    ]
  }
]