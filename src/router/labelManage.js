import Layout from '../views/Layout/Layout.vue'

export default [
  {
    path: '/label-manage',
    name: 'LabelManage',
    meta: {
      title: '标签管理',
      icon: 'iconxinwen',
      auth: ['admin']
    },
    component: Layout,
    redirect: '/label-manage/label-index',
    children: [
      {
        path: 'label-index',
        name: 'LabelIndex',
        meta: {
          icon: 'iconliebiao',
          title: '标签列表',
          activeMenu: 'label-index',
          openMenu: '/label-manage'
        },
        component: import(/* webpackChunkName: 'LabelManage' */ '../views/LabelManage/LabelManage.vue')
      }
    ]
  }
]