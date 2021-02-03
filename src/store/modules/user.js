import * as types from '../type'
import methods from '../../apis/methods'

const { login } = methods

export default {
  namespaced: true,
  state() {
    return {
      userInfo: {},
      token: ''
    }
  },
  mutations: {
    [types.LOGIN](state, userData) {
      state.userInfo = userData
      state.token = userData.token

      localStorage.setItem('userInfo', JSON.stringify(userData))
      localStorage.setItem('token', userData.token)
    },
    [types.LOGOUT](state, status) {
      state.status = status
    }
  },
  actions: {
    async [types.LOGIN]({ commit }, userInfo) {
      try {
        const { data } = await login(userInfo)
        
        commit(types.LOGIN, data)
      }catch(e) {
        console.log(e)
      }
    },
    async [types.LOGOUT]({ commit }, userInfo) {
      // await logout(userInfo)
      commit(types.LOGOUT, userInfo)
    }
  },

}