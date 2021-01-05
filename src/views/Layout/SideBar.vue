<template>
  <a-menu theme="dark" :defaultSelectedKeys="selectedKeys" :defaultOpenKeys="openKeys" mode="inline">
    <template v-for="item in menuData" :key="item.path">
      <a-menu-item v-if="!item.children" :key="item.path">
        <router-link :to="{ name: item.name }">
          <icon-font v-if="item.meta.icon" :type="item.meta.icon" :style="iconStyle"></icon-font>
          <span>{{ item.meta.title }}</span>
        </router-link>
      </a-menu-item>
      <sub-menu v-else :key="item.path" :menu-info="item"></sub-menu>
    </template>
  </a-menu>
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
      iconStyle: {
        color: '#fff'
      }
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

      routes.forEach(item => {
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
    }
  },
  components: {
    SubMenu
  }
}
</script>
<style lang="scss">
</style>