// 用户名校验
const userNameValidator = (rule, value, callback) => {
  if(!value) {
    callback(new Error('请输入用户名'))
  }if(value.length > 6 || value.length < 3) {
    callback(new Error('请输入3-6位字符串'))
  }else {
    callback()
  }
}

// 密码校验
const passwordValidator = (rule, value, callback) => {
  const reg = /^(?=.*[0-9])(?=.*[a-zA-Z])(.{6,})$/
  if(!value) {
    callback(new Error('请输入密码'))
  }else if(value.length < 6) {
    callback(new Error('密码最少为6位'))
  }else if(!reg.test(value)) {
    callback(new Error('密码中要包含字母和数字'))
  }else {
    callback()
  }
}

// 电话号码校验
const telValidator = (rule, value, callback) => {
  const reg = /^[1][3,4,5,7,8,9][0-9]{9}$/
  if(!value) {
    callback(new Error('请输入电话号码'))
  }else if(!reg.test(Number(value))) {
    callback(new Error('请输入正确电话号码'))
  }else {
    callback()
  }
}

export const loginRules = {
  userName: [
    {
      required: true,
      trigger: 'blur',
      validator: userNameValidator
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: passwordValidator
    },
  ]
}

export const registRules = {
  userName: [
    {
      required: true,
      trigger: 'blur',
      validator: userNameValidator
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: passwordValidator
    },
  ],
  repeatPassword: [
    {
      required: true,
      trigger: 'blur',
      validator: (rule, value, callback) => {
        if(!value) {
          callback('请输入确认密码')
        }else if(this.registForm.repeatPassword !== value) {
          callback('两次密码不一致')
        }else (
          callback()
        )
      }
    },
  ],
  telephone: [
    {
      required: true,
      trigger: 'blur',
      validator: telValidator
    },
  ],
  sex: [
    {
      required: true,
      message: '请选择性别',
      trigger: 'change',
    },
  ]
}