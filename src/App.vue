<template>
  <div id="app">
    <!-- a-locale-provider已经弃用，变成a-config-provider -->
    <!-- 报错信息：Warning: [antd: LocaleProvider] LocaleProvider is deprecated. Please use locale with `Config -->
    <a-config-provider :locale="locale">
      <router-view />
    </a-config-provider>
  </div>
</template>
<script>
import zhCN from 'ant-design-vue/lib/locale/zh_CN'
import enUS from 'ant-design-vue/lib/locale/en_US'
import moment from 'moment'

export default {
  data() {
    return {
      locale: zhCN,
    }
  },
  mounted() {
    console.log('i18n Msg', this.$t('route.loginPage'))
    console.log('i18n Msg', this.$t('route.home'))
    console.log('i18n Msg', this.$t('route.newsManage'))
    console.log('i18n Msg', this.$t('route.newsManage_allNews'))
    console.log('i18n Msg', this.$t('route.newsManage_myNews'))
    console.log('i18n Msg', this.$t('route.newsManage_createNews'))
    console.log('i18n Msg', this.$t('route.userManage'))
    console.log('i18n Msg', this.$t('route.userManage_userList'))
    console.log('i18n Msg', this.$t('route.labelManage'))
    console.log('i18n Msg', this.$t('route.labelManage_labelList'))
    console.log('i18n Msg', this.$t('route.newsAnalysis'))
    console.log('i18n Msg', this.$t('route.newsAnalysis_chart'))
    console.log('i18n Msg', this.$t('route.newsAnalysis_map'))
    console.log('i18n Msg', this.$t('route.404'))
  },
  watch: {
    '$route.query.locale': function (value) {
      console.log('i18n Msg', this.$t('route.userManage'))
      this.locale = value === 'enUS' ? enUS : zhCN
      moment.locale(value === 'enUS' ? 'en' : 'zh-cn')
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
