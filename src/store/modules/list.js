import * as types from '../type'

export default {
  namespaced: true,
  state() {
    return {
      newsList: {
        newsTitle: 'xxx',
        updateTime: 'xxxxxx'
      },
      count: 1
    }
  },
  mutations: {
    [types.GETLIST](state, count) {
      state.count = state.count + count
    }
  },
  actions: {
    [types.GETLIST]({ commit }) {
      setTimeout(() => {
        commit(types.GETLIST, 5)
      },200)
    }
  },

}