import Layout from '../views/Layout/Layout.vue'

export default [
  {
    path: '/user-manage',
    name: 'UserManage',
    meta: {
      title: '用户管理',
      icon: 'iconxinwen',
      auth: ['admin']
    },
    component: Layout,
    redirect: '/user-manage/user-index',
    children: [
      {
        path: 'user-index',
        name: 'UserIndex',
        meta: {
          icon: 'iconliebiao',
          title: '用户列表',
          activeMenu: 'user-index',
          openMenu: '/user-manage'
        },
        component: import(/* webpackChunkName: 'userManage' */ '../views/UserManage/UserManage.vue')
      }
    ]
  }
]