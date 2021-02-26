<template>
  <div id="app">
    <!-- a-locale-provider已经弃用，变成a-config-provider -->
    <!-- 报错信息：Warning: [antd: LocaleProvider] LocaleProvider is deprecated. Please use locale with `Config -->
    <a-config-provider :locale="localeValue">
      <router-view />
    </a-config-provider>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import zhCN from 'ant-design-vue/lib/locale/zh_CN'
import enUS from 'ant-design-vue/lib/locale/en_US'
import moment from 'moment'

export default {
  data() {
    return {
      localeValue: zhCN,
    }
  },
  computed: {
    ...mapGetters({
      locale: 'LANGUAGE/locale',
    }),
  },
  mounted() {},
  watch: {
    locale: function (value) {
      this.localeValue = value[0] === 'enUS' ? enUS : zhCN
      moment.locale(value[0] === 'enUS' ? 'en' : 'zh-cn')
    },
  },
}
</script>
<style lang="scss">
#app {
  height: 100%;
}
// @import './assets/style/index.scss';
// @import './assets/style/custom.scss';
</style>
