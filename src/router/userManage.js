import Layout from '../views/Layout/Layout.vue'

export default [
  {
    path: '/user-manage',
    name: 'UserManage',
    meta: {
      title: 'route.userManage',
      icon: 'iconyonghuguanli_huaban',
      auth: ['admin']
    },
    component: Layout,
    redirect: '/user-manage/user-index',
    children: [
      {
        path: '/user-manage/user-index',
        name: 'UserIndex',
        meta: {
          icon: 'iconliebiao',
          title: 'route.userManage_userList',
          activeMenu: 'user-index',
          openMenu: '/user-manage'
        },
        component: () => import(/* webpackChunkName: 'userManage' */ '../views/UserManage/UserManage.vue')
      }
    ]
  }
]