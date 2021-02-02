import * as types from '../type'
import methods from '../../apis/methods'

export default {
  namespaced: true,
  state() {
    return {
      userInfo: {},
      token: ''
    }
  },
  mutations: {
    [types.LOGIN](state, status) {
      state.status = state.status + status
    },
    [types.LOGOUT](state, status) {
      state.status = status
    }
  },
  actions: {
    async [types.LOGIN]({ commit }, userInfo) {
      console.log('vuex', methods)
      // const result = await login(userInfo)
      // console.log(result)
        commit(types.LOGIN, userInfo)
    },
    async [types.LOGOUT]({ commit }, userInfo) {
      // await logout(userInfo)
      commit(types.LOGOUT, userInfo)
    }
  },

}