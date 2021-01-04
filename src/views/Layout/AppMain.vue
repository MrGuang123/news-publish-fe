<template>
  <div class="main">
    <!-- <a-breadcrumb class="breadcrumb">
      <a-breadcrumb-item>User</a-breadcrumb-item>
      <a-breadcrumb-item>Bill</a-breadcrumb-item>
    </a-breadcrumb> -->
    <!-- vue2写法  即将不支持 -->
    <!-- <transition name="fade" enter-active-class="animated fadeIn" mode="out-in">
      <keep-alive>
      <router-view :key="key"></router-view>
      </keep-alive>
    </transition> -->
    <!-- vue3写法 -->
    <router-view v-slot="{ Component }">
      <transition name="fade" enter-active-class="animated fadeIn" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
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
  min-width: 1000px;
  .breadcrumb {
    margin-bottom: 16px;
  }
}
</style>