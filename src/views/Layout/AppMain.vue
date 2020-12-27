<template>
  <div class="main">
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
}
</style>