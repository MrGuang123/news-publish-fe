<template>
  <a-layout-sider :trigger="null" v-model="collapsed" collapsible>
    <div class="logo"></div>
    <a-menu :selected-keys="selectedKeys" :open-keys.sync="openKeys" mode="inline" :theme="theme" :inline-collapsed="collapsed">
      <template v-for="item in menuData">
        <a-menu-item v-if="!item.children" :key="item.path" @click="() => $router.push({path: item.path, query: $router.query})">
          <icon-font style="color: #fff;" v-if="item.meta.icon" :type="item.meta.icon"></icon-font>
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
    // 控制tab栏是否缩放
    collapsed: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  data() {
    return {
      // 选择的菜单
      selectedKeys: [],
      // 打开的菜单
      openKeys: [],
      // 所有展示到菜单中的路由数据
      menuData: [],
      // 主题
      theme: 'dark',
      // 所有可以选择的菜单的映射
      selectedKeysMap: {},
      // 所有可以打开的菜单的映射
      openKeysMap: {},
    }
  },
  watch: {
    // 路由变化的时候菜单栏选中和打开状态变化
    '$route.path': function (path) {
      this.selectedKeys = this.selectedKeysMap[path]
      this.openKeys = this.collapsed ? [] : this.openKeysMap[path]
    },
    // 菜单栏缩小的时候将将打开的菜单关闭
    collapsed: function (value) {
      this.openKeys = value ? [] : this.openKeysMap[this.$route.path]
    },
  },
  mounted() {
    // 初始化路由菜单数据和初始化菜单的打开和选中
    this.menuData = this.getMenuList(this.$router.options.routes)
    this.selectedKeys = this.selectedKeysMap[this.$route.path]
    this.openKeys = this.collapsed ? [] : this.openKeysMap[this.$route.path]
  },
  methods: {
    // 获取路由菜单数据
    getMenuList(routes = [], parentKeys = [], selectedKey) {
      const menuData = []

      routes.forEach(item => {
        // 定义规则为路由信息有name和hideInMenu为false时候展示到菜单栏中
        if (item.name && !item.hideInMenu) {
          // 将key为当前路由，value为父路由的数组存储到打开菜单的映射中
          this.openKeysMap[item.path] = parentKeys
          // 将key为当前路由，value为选中的key或者当前路由存储到选中菜单映射中
          this.selectedKeysMap[item.path] = [selectedKey || item.path]
          // 浅拷贝一份当前路由信息并且删除children
          const newItem = { ...item }
          delete newItem.children

          // 如果有children并且hideChildren为false
          if (item.children && !item.hideChildren) {
            // 对children进行递归，routes为children路由，parentKey为当前parentKey和当前路由组成的数组
            newItem.children = this.getMenuList(item.children, [
              ...parentKeys,
              item.path,
            ])
          } else {
            // 如果没有children或者hideChildren为true执行的递归
            // 如果没有children，默认routes为[]，保证运行不出错
            // 如果hideChildren为true，则保证隐藏的子路由页面展示的时候，tab可以选中该子路由的展示的父路由
            this.getMenuList(
              item.children,
              selectedKey ? parentKeys : [...parentKeys, item.path],
              selectedKey || item.path
            )
          }
          // 将处理后的路由信息插入到menuData中，用来后续交给菜单渲染
          menuData.push(newItem)
        } else if (!item.hideInMenu && !item.hideChildren && item.children) {
          // 如果hideInMenu为false，hideChildren为false，有children，没有name情况下对子路由进行递归并插入到menuData中，用来后续交给菜单渲染
          menuData.push(
            ...this.getMenuList(item.children, [...parentKeys, item.path])
          )
        }
      })

      // 返回menuData
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