import Layout from '../views/Layout/Layout.vue'

export default [
  {
    path: '/label-manage',
    name: 'LabelManage',
    meta: {
      title: 'route.labelManage',
      icon: 'iconbiaoqian',
      auth: ['admin']
    },
    component: Layout,
    redirect: '/label-manage/label-index',
    children: [
      {
        path: '/label-manage/label-index',
        name: 'LabelIndex',
        meta: {
          icon: 'iconliebiao',
          title: 'route.labelManage_labelList',
        },
        component: () => import(/* webpackChunkName: 'LabelManage' */ '../views/LabelManage/LabelManage.vue')
      }
    ]
  }
]