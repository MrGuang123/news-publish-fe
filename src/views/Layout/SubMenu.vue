<template functional>
  <a-sub-menu :key="props.menuInfo.path">
    <span slot="title">
      <a-icon type="mail" /><span>{{ props.menuInfo.meta.title }}</span>
    </span>
    <template v-for="item in props.menuInfo.children">
      <a-menu-item v-if="!item.children" :key="item.path">
        <a-icon type="pie-chart" />
        <span>{{ item.meta.title }}</span>
      </a-menu-item>
      <sub-menu v-else :key="item.path" :menu-info="item" />
    </template>
  </a-sub-menu>
</template>
<script>
export default {
  name: 'SubMenu',
  isSubMenu: true,
  props: {
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  // data() {
  //   return {
  //     iconStyle: {
  //       color: '#fff',
  //     },
  //   }
  // },
  // mounted() {
  //   // console.log('menuInfo', this.menuInfo.meta)
  // },
  // components: {},
}
</script>
<style lang="scss">
</style>