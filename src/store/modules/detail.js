import Cookies from 'js-cookie'

const state = {
  drawerOpenState:false,
  drawerOpenType:'',
  drawerOpenSize:'',
  drawerOpenTitle:'',
}

const mutations = {
  SET_DRAWER_OPEN_STATE: (state,data) =>{
    state.drawerOpenState = data
  },
  SET_DRAWER_OPEN_TYPE: (state,data) =>{
    state.drawerOpenType = data
  },
  SET_DRAWER_OPEN_SIZE: (state,data) =>{
    state.drawerOpenSize = data
  },
  SET_DRAWER_OPEN_TITLE: (state,data) =>{
    state.drawerOpenTitle = data
  },
}

const actions = {
  setDrawerOpenState({ commit },data) {
    commit('SET_DRAWER_OPEN_STATE',data)
  },
  setDrawerOpenType({ commit },data) {
    commit('SET_DRAWER_OPEN_TYPE',data)
  },
  setDrawerOpenSize({ commit },data) {
    commit('SET_DRAWER_OPEN_SIZE',data)
  },
  setDrawerOpenTitle({ commit },data) {
    commit('SET_DRAWER_OPEN_TITLE',data)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
