<template>
  <div class="login-wrap" ref="loginWrap">
    <!-- <div class="main-title"> -->
    <h1 class="main-title" data-heading="新闻发布系统">新闻发布系统</h1>
    <!-- </div> -->
    <div class="form-tabs">
      <a-tabs>
        <a-tab-pane key="1" tab="登录">
          <a-form
            ref="loginForm"
            layout="horizontal"
            :hideRequiredMark="true"
            :model="loginForm"
            :rules="loginRules"
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
          >
            <a-form-item label="用户名" name="userName">
              <a-input v-model="loginForm.userName" pressEnter="login">
                <template #addonBefore>
                  <icon-font type="iconiconname"></icon-font>
                </template>
              </a-input>
            </a-form-item>
            <a-form-item label="密码" name="password">
              <a-input
                v-model="loginForm.password"
                type="password"
                pressEnter="login"
              >
                <template #addonBefore>
                  <icon-font type="iconsuo"></icon-font>
                </template>
              </a-input>
            </a-form-item>
            <a-form-item :wrapper-col="{ span: 6, offset: 8 }">
              <a-button class="submit-btn" type="primary" @click="login"
                >登录</a-button
              >
            </a-form-item>
          </a-form>
        </a-tab-pane>
        <!-- <a-tab-pane key="2" tab="注册">
          <a-form ref="registForm" layout="horizontal" :model="registForm" :rules="registRules" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-form-item label="用户名" name="userName">
              <a-input v-model="registForm.userName" />
            </a-form-item>
            <a-form-item label="昵称" name="nickName">
              <a-input v-model="registForm.nickName" />
            </a-form-item>
            <a-form-item label="密码" type="password" name="password">
              <a-input v-model="registForm.password" />
            </a-form-item>
            <a-form-item label="重复密码" type="password" name="repeatPassword">
              <a-input v-model="registForm.repeatPassword" />
            </a-form-item>
            <a-form-item label="电话号码" name="telephone">
              <a-input v-model="registForm.telephone" />
            </a-form-item>
            <a-form-item label="性别" name="sex">
              <a-radio-group v-model="registForm.sex">
                <a-radio value="0">男</a-radio>
                <a-radio value="1">女</a-radio>
              </a-radio-group>
            </a-form-item>
            <a-form-item :wrapper-col="{ span: 6, offset: 9 }">
              <div style="text-align:center; color: #f5222d;">暂停注册！</div>
              <a-button disabled class="submit-btn" type="primary" @click="createUser">注册</a-button>
            </a-form-item>
          </a-form>
        </a-tab-pane> -->
      </a-tabs>
    </div>
  </div>
</template>

<script>
import { loginRules, registRules } from './validateRules'
// TODO: 检验方式需要降级  当前写法为antd2的，需要降级为1  2是给vue3使用的。。。

export default {
  data() {
    return {
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
      other: '',
      loginForm: {
        userName: '',
        password: '',
      },
      registForm: {
        userName: '',
        password: '',
      },
      loginRules,
      registRules,
    }
  },
  created() {
    console.log(this.$refs.loginWrap)
    document.onkeyup = event => {
      if (
        this.$refs.loginWrap &&
        (event.keyCode === 13 || event.which === 13)
      ) {
        this.login()
      }
    }
  },
  methods: {
    async login() {
      const { userName, password } = this.loginForm
      if (!userName || !password) {
        return this.$notification.error({
          message: '用户名或者密码缺失',
          description: '请将用户名和密码填写完整后再次尝试登陆！',
        })
      }
      try {
        await this.$store.dispatch('USER/LOGIN', this.loginForm)
        this.$router.push('/')
      } catch (e) {
        console.log(e)
      }
    },
    createUser() {},
  },
}
</script>

<style lang="scss" scoped>
.login-wrap {
  .main-title {
    font-family: 'Source Code Pro', monospace;
    text-transform: uppercase;
    transform: translate(-50%, -50%);
    font-size: 36px;
    width: 39px;
    position: absolute;
    top: 50%;
    left: 16%;
    margin: 0;
    text-rendering: optimizeLegibility;
    font-weight: 900;
    color: #666;
    text-shadow: 1px 4px 6px #e6e2df, 0 0 0 #66303a, 1px 4px 6px #e6e2df;
    transform-style: preserve-3d;
    perspective: 1000;
    &:hover:before {
      transform: rotateY(-45deg);
    }
    padding: 6px;
    box-sizing: content-box;
    border-radius: 6px;
    box-shadow: 2px 2px 10px 0 #fff, 2px 2px 10px 0 #fff inset;
  }
  .main-title:before {
    content: attr(data-heading);
    transition: all 0.6s;
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    color: #fbf7f4;
    transform-origin: left center;
    transform: rotateY(-30deg);
    z-index: 2;
    padding: 6px;
    box-sizing: content-box;
    text-shadow: 2px -1px 6px rgba(0, 0, 0, 0.2);
  }
  min-height: 100%;
  background-image: url('../../assets/images/bg.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 200px;
  position: relative;
  overflow: auto;

  .form-tabs {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 360px;
    padding: 10px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 6px;

    ::v-deep(.ant-tabs-nav) {
      width: 100%;
      .ant-tabs-tab {
        width: calc(50% - 16px);
        text-align: center;
      }
    }
    ::v-deep .ant-input {
      background: rgba(255, 255, 255, 0.6);
    }
    ::v-deep .ant-input-group-addon {
      background: transparent;
    }
    ::v-deep .ant-tabs-ink-bar,
    ::v-deep .ant-tabs-tab,
    ::v-deep .ant-tabs-nav {
      width: 100% !important;
    }
    ::v-deep .ant-tabs-tab {
      text-align: center !important;
      font-size: 18px;
    }

    .submit-btn {
      width: 112px;
      height: 36px;
    }
  }
}
</style>