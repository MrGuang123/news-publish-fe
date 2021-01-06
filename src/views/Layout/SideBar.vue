<template>
  <a-layout-sider :trigger="null" v-model="collapsed" collapsible>
    <div class="logo"></div>
    <a-menu
      :selected-keys="selectedKeys"
      :open-keys="openKeys"
      mode="inline"
      :theme="theme"
      :inline-collapsed="collapsed"
    >
      <template v-for="item in menuData">
        <a-menu-item v-if="!item.children" :key="item.path">
          <a-icon type="pie-chart" />
          <span>{{ item.meta.title }}</span>
        </a-menu-item>
        <sub-menu v-else :key="item.path" :menu-info="item" />
      </template>
    </a-menu>
  </a-layout-sider>
</template>
<script>
import SubMenu from './SubMenu'

export default {
  name: 'SideBar',
  props: {
    collapsed: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  data() {
    // const menuData = this.getMenuList(this.$router.options.routes)
    return {
      selectedKeys: ['1'],
      openKeys: ['2'],
      menuData: [],
      theme: 'dark',
      iconStyle: {
        color: '#fff',
      },
      list: [],
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

          if (item.children && !item.hideChildren) {
            newItem.children = this.getMenuList(item.children)
          }
          menuData.push(newItem)
        } else if (!item.hideInMenu && !item.hideChildren && item.children) {
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