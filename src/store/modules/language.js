import * as types from '../type'

export default {
  namespaced: true,
  state() {
    return {
      language: ''
    }
  },
  getters: {
    locale: state => {
      const language = localStorage.getItem('language')
      return [state.language || language]
    }
  },
  mutations: {
    [types.CHANGELANGUAGE](state, type) {
      state.language = type
      localStorage.setItem('language', type)
    }
  }

}