<template>
  <div class="login-wrap">
    <div class="form-tabs">
      <a-tabs>
        <a-tab-pane key="1" tab="登录">
          <a-form ref="loginForm" layout="horizontal" :hideRequiredMark="true" :model="loginForm" :rules="loginRules" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-form-item label="用户名" name="userName">
              <a-input v-model="loginForm.userName">
                <template #addonBefore>
                  <icon-font type="iconiconname"></icon-font>
                </template>
              </a-input>
            </a-form-item>
            <a-form-item label="密码" name="password">
              <a-input v-model="loginForm.password" type="password">
                <template #addonBefore>
                  <icon-font type="iconsuo"></icon-font>
                </template>
              </a-input>
            </a-form-item>
            <a-form-item :wrapper-col="{ span: 6, offset: 8 }">
              <a-button class="submit-btn" type="primary" @click="login">登录</a-button>
            </a-form-item>
          </a-form>
        </a-tab-pane>
        <a-tab-pane key="2" tab="注册">
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
        </a-tab-pane>
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
  methods: {
    async login() {
      const result = await this.$store.dispatch('user/LOGIN', this.loginForm)
      console.log('login', result, this.loginForm)
    },
    createUser() {},
  },
}
</script>

<style lang="scss" scoped>
.login-wrap {
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
    ::v-deep(.ant-input) {
      background: rgba(255, 255, 255, 0.6);
    }
    ::v-deep(.ant-input-group-addon) {
      background: transparent;
    }

    .submit-btn {
      width: 112px;
      height: 36px;
    }
  }
}
</style>