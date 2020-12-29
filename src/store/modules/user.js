import * as types from '../type'

export default {
  namespaced: true,
  state() {
    return {
      userInfo: {
        userName: 'xxx',
        password: 'xxxxxx'
      },
      status: 'a'
    }
  },
  mutations: {
    [types.LOGIN](state, status) {
      state.status = state.status + status
    }
  },
  actions: {
    [types.LOGIN]({ commit }) {
      setTimeout(() => {
        commit(types.LOGIN, 'b')
      },200)
    }
  },

}