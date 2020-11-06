import Cookies from 'js-cookie'

const state = {
  drawerOpenState:false,
  drawerOpenType:'',
}

const mutations = {
  SET_DRAWER_OPEN_STATE: (state,data) =>{
    state.drawerOpenState = data
  },
  SET_DRAWER_OPEN_TYPE: (state,data) =>{
    state.drawerOpenType = data
  },
}

const actions = {
  setDrawerOpenState({ commit },data) {
    commit('SET_DRAWER_OPEN_STATE',data)
  },
  setDrawerOpenType({ commit },data) {
    commit('SET_DRAWER_OPEN_TYPE',data)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
