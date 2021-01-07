<template>
  <div class="header">
    <div class="set-theme">
      <icon-font type="icontubiao_ditu"></icon-font>
      <icon-font type="icontubiaobingzhuangtu"></icon-font>
      <icon-font type="iconziyuan314"></icon-font>
      <icon-font type="iconshouye"></icon-font>
      <icon-font type="iconxinwen"></icon-font>
      <icon-font type="iconiconname"></icon-font>
      <icon-font type="iconsuo"></icon-font>
      <icon-font type="iconzhanghuzonglan"></icon-font>
      <icon-font type="iconliebiao"></icon-font>
      <icon-font type="iconbiaoqian"></icon-font>
      <icon-font type="iconbianji"></icon-font>
      <icon-font type="icontongji"></icon-font>
      <icon-font type="iconyonghuguanli_huaban"></icon-font>
      <a-dropdown>
        <a-menu slot="overlay" @click="handleMenuClick" :selected-keys="selectedKey">
          <a-menu-item v-for="item in themeData" :key="item.key">
            <a-icon type="user" />
            <span>{{ item.name }}</span>
          </a-menu-item>
        </a-menu>
        <a-button class="btn-trigger">设置主题
          <a-icon type="down" />
        </a-button>
      </a-dropdown>
    </div>
    <div class="user">用户头像</div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      themeData: [
        {
          name: '黑暗',
          key: 'dark',
          icon: '',
        },
        {
          name: '明亮',
          key: 'light',
          icon: '',
        },
      ],
      selectedKey: ['dark'],
    }
  },
  methods: {
    handleMenuClick({ key }) {
      console.log(key)
      this.selectedKey[0] = key
    },
  },
}
</script>
<style lang="scss">
.header {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
  .set-theme {
    margin-right: 20px;
  }
  .btn-trigger {
    margin-left: 6px;
  }
}
</style>