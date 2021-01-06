<template>
  <a-layout-sider :trigger="null" v-model="collapsed" collapsible>
    <div class="logo">

    </div>
    <sub-menu :theme="theme" :collapsed="collapsed" :key="item.path" :menu-data="menuData"></sub-menu>
  </a-layout-sider>
</template>
<script>
import SubMenu from './SubMenu'

export default {
  name: 'SideBar',
  data() {
    // const menuData = this.getMenuList(this.$router.options.routes)
    return {
      selectedKeys: [],
      openKeys: [],
      menuData: [],
      theme: 'dark',
      iconStyle: {
        color: '#fff',
      },
    }
  },
  watch: {
    // '$route.path': function (path) {
    //   console.log(path)
    // }
  },
  mounted() {
    let metaInfo = this.$route.meta
    this.menuData = this.getMenuList(this.$router.options.routes)

    this.selectedKeys.push(metaInfo.activeMenu)
    this.openKeys.push(metaInfo.openMenu)
    // this.openKeys.push(this.menuData[0].path)
    // console.log('metaInfo', metaInfo)
  },
  methods: {
    getMenuList(routes) {
      const menuData = []

      routes.forEach((item) => {
        if (item.name && !item.hideInMenu) {
          const newItem = { ...item }
          delete newItem.children

          if (item.children && !item.hideChildrenInMenu) {
            newItem.children = this.getMenuList(item.children)
          }
          menuData.push(newItem)
        } else if (
          !item.hideInMenu &&
          !item.hideChildrenInMenu &&
          item.children
        ) {
          menuData.push(...this.getMenuList(item.children))
        }
      })

      return menuData
    },
  },
  components: {
    SubMenu,
  },
}
</script>
<style lang="scss">
</style>