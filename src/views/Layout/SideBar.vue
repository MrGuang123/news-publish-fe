<template>
  <a-menu theme="dark" :selectedKeys="selectedKeys" mode="inline">
    <template v-for="item in menuData" :key="item.path">
      <a-menu-item v-if="!item.children" :key="item.path">
        <router-link :to="{ name: item.name }">
          <a-icon v-if="item.meta.icon" :type="item.meta.icon"></a-icon>
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
    const menuData = this.getMenuList(this.$router.options.routes)
    return {
      selectedKeys: ['1'],
      openKeys: [],
      list: [],
      menuData,
    }
  },
  mounted() {
    console.log('menuData', this.menuData)
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