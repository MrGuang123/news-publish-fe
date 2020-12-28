<template>
  <a-sub-menu :key="menuInfo.path">
    <template v-slot:title>
      <HomeOutlined />
      <span>{{ menuInfo.meta.title }}</span>
    </template>
    <template v-for="item in menuInfo.children" :key="item.path">
      <a-menu-item v-if="!item.children" :key="item.path">
        <router-link :to="{ name: item.name }">
          <SettingFilled />
          <span>{{ item.meta.title }}</span>
        </router-link>
      </a-menu-item>
      <sub-menu v-else :key="item.path" :menu-info="item"></sub-menu>
    </template>
  </a-sub-menu>
</template>
<script>
import {
  HomeOutlined,
  SettingFilled,
  // SmileOutlined,
  // SyncOutlined,
  // LoadingOutlined,
} from '@ant-design/icons-vue'
export default {
  props: ['menuInfo'],
  mounted() {
    console.log('menuInfo', this.menuInfo)
  },
  components: {
    HomeOutlined,
    SettingFilled,
    // SmileOutlined,
    // SyncOutlined,
    // LoadingOutlined,
  },
}
</script>
<style lang="scss">
</style>