<template>
  <a-layout class="layout-wrap">
    <a-layout-sider :trigger="null" v-model:collapsed="collapsed" collapsible>
      <div class="logo">

      </div>
      <side-bar></side-bar>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="layout-header">
        <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
        <Header></Header>
      </a-layout-header>
      <a-layout-content class="layout-content">
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

import { mapActions, mapState } from 'vuex'

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
  },
  computed: {
    test() {
      return 'aaaa'
    },
    ...mapState('user', {
      status: (state) => state.status,
    }),
    ...mapState('list', {
      count: (state) => state.count,
    }),
  },
  async mounted() {
    // 测试vuex
    // console.log(this)
    // console.log(this.status)
    // console.log(this.count)
    // await this.login()
    // await this.getList()
    // this.$nextTick(() => {
    //   console.log('wait', this.status)
    //   console.log('wait', this.count)
    // })
  },
  methods: {
    ...mapActions('user', {
      login: 'LOGIN',
    }),
    ...mapActions('list', {
      getList: 'GETLIST',
    }),
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