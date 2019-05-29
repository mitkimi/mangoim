const state = {
  onlyShowPop: null,
  currentMenu: 'msg'
}

const mutations = {
  setShowPop (state, key) {
    state.onlyShowPop = key
  },
  setMenu (state, key) {
    state.currentMenu = key
  }
}

const actions = {
  handleSetPop ({ commit }, key) {
    // do something async
    commit('setShowPop', key)
  },
  handleSetMenu ({commit}, key) {
    commit('setMenu', key)
  }
}

export default {
  state,
  mutations,
  actions
}
