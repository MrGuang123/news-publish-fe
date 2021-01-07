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
        name: 'AnalysisIndex',
        meta: {
          icon: 'icontubiaobingzhuangtu',
          title: '统计图表'
        },
        component: () => import(/* webpackChunkName: 'newsAnalysis' */ '../views/NewsAnalysis/NewsAnalysis.vue')
      },
      {
        path: '/news-analysis/news-map',
        name: 'NewsMap',
        meta: {
          icon: 'icontubiao_ditu',
          title: '总量地图'
        },
        component: () => import(/* webpackChunkName: 'newsAnalysis' */ '../views/NewsAnalysis/NewsMap.vue')
      },
    ]
  }
]