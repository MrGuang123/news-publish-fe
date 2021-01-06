<template>
  <a-menu :theme="theme" :defaultSelectedKeys="selectedKeys" :defaultOpenKeys="openKeys" mode="inline">
    <template v-for="item in menuData">
      <a-menu-item v-if="!item.children" :key="item.path">
        <router-link :to="{ name: item.name }">
          <icon-font v-if="item.meta.icon" :type="item.meta.icon" :style="iconStyle"></icon-font>
          <span>{{ item.meta.title }}</span>
        </router-link>
      </a-menu-item>
      <a-sub-menu :key="item.path">
        <div slot="title">
          <icon-font v-if="menuInfo.meta.icon" :type="menuInfo.meta.icon" :style="iconStyle"></icon-font>
          <span>{{ menuInfo.meta.title }}</span>
        </div>
        <div v-for="item in menuInfo.children" :key="item.path">
          <a-menu-item v-if="!item.children" :key="item.path">
            <router-link :to="{ name: item.name }">
              <icon-font v-if="item.meta.icon" :type="item.meta.icon" :style="iconStyle"></icon-font>
              <span>{{ item.meta.title }}</span>
            </router-link>
          </a-menu-item>
          <sub-menu v-else :key="item.path" :menu-info="item"></sub-menu>
        </div>
      </a-sub-menu>
    </template>
  </a-menu>
</template>
<script>
export default {
  props: ['menuData', 'theme'],
  data() {
    return {
      iconStyle: {
        color: '#fff',
      },
    }
  },
  mounted() {
    // console.log('menuInfo', this.menuInfo.meta)
  },
  components: {},
}
</script>
<style lang="scss">
</style>