<template>
  <div class="header">
    <!-- <div class="set-theme">
      <icon-font type="icontubiao_ditu"></icon-font>
      <a-dropdown>
        <a-menu slot="overlay" @click="changeTheme" :selected-keys="selectedKey">
          <a-menu-item v-for="item in themeData" :key="item.key">
            <a-icon type="user" />
            <span>{{ item.name }}</span>
          </a-menu-item>
        </a-menu>
        <a-button class="btn-trigger">设置主题
          <a-icon type="down" />
        </a-button>
      </a-dropdown>
    </div> -->
    <div class="set-locale">
      <a-dropdown>
        <!-- <a class="ant-dropdown-link" @click="e => e.preventDefault()">语言切换</a> -->
        <a-menu slot="overlay" @click="changeLocale" :selectedKeys="locale">
          <a-menu-item key="zhCN">简体中文</a-menu-item>
          <a-menu-item key="enUS">English</a-menu-item>
        </a-menu>
        <a-button class="btn-trigger">{{ $t('exchangeLanguage') }}</a-button>
      </a-dropdown>
    </div>
    <div class="user">
      <a-dropdown>
        <a-menu slot="overlay" @click="userHandler">
          <a-menu-item key="logout">退出登录</a-menu-item>
        </a-menu>
        <a-button class="btn-trigger user-handler">
          <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          {{userName}}
        </a-button>
      </a-dropdown>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'

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
  computed: {
    userName() {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'))
      return userInfo.userName
    },
    ...mapGetters({
      locale: 'LANGUAGE/locale',
    }),
  },
  methods: {
    ...mapMutations('LANGUAGE', {
      changeLanguage: 'CHANGELANGUAGE',
    }),
    changeTheme({ key }) {
      console.log(key)
      this.selectedKey[0] = key
    },
    changeLocale({ key }) {
      // this.$router.push({
      //   query: {
      //     ...this.$route.query,
      //     locale: key,
      //   },
      // })
      this.changeLanguage(key)
      this.$i18n.locale = key
    },
    userHandler({ key }) {
      console.log(key)
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
    margin-left: 16px;
  }
  .user-handler {
    border: none;
    box-shadow: 2px 2px 6px rgba(24, 14, 255, 0.6);
    border-radius: 6px;
    min-width: 116px;
  }
}
</style>