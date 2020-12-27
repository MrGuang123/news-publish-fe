<template>
  <a-layout class="layout-wrap">
    <a-layout-sider :trigger="null" v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <side-bar></side-bar>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="layout-header">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <Header></Header>
      </a-layout-header>
      <a-layout-content class="layout-content">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
        <app-main></app-main>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import Header from './Header'
import SideBar from './SideBar'
import AppMain from './AppMain'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
export default {
  data() {
    return {
      collapsed: false,
    }
  },
  components: {
    Header,
    SideBar,
    AppMain,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
}
</script>
<style lang="scss">
.layout-wrap {
  min-height: 100vh !important;
  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #1890ff;
    }
  }

  .layout-header {
    background: #fff;
    padding: 0;
  }
  .layout-content {
    margin: 0 16px;
  }
}
</style>