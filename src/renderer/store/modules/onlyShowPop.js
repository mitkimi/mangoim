const state = {
  onlyShowPop: null
}

const mutations = {
  setShowPop (state, key) {
    state.onlyShowPop = key
  }
}

const actions = {
  handleSetPop ({ commit }, key) {
    // do something async
    commit('setShowPop', key)
    console.log('from action ==>', arguments)
  }
}

export default {
  state,
  mutations,
  actions
}
