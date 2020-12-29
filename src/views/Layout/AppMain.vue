<template>
  <div class="main">
    <a-breadcrumb class="breadcrumb">
      <a-breadcrumb-item>User</a-breadcrumb-item>
      <a-breadcrumb-item>Bill</a-breadcrumb-item>
    </a-breadcrumb>
    <transition name="fade" enter-active-class="animated fadeIn" mode="out-in">
      <!-- <keep-alive> -->
      <router-view :key="key"></router-view>
      <!-- </keep-alive> -->
    </transition>
  </div>
</template>
<script>
export default {
  name: 'AppMain',
}
</script>
<style lang="scss">
.main {
  padding: 10px;
  .breadcrumb {
    margin-bottom: 16px;
  }
}
</style>