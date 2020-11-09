import Cookies from 'js-cookie'

const state = {
  drawerOpenState:false,
  drawerOpenType:'',
  drawerOpenSize:'',
  drawerOpenTitle:'',
  drawerOpenModal:true,   //是否显示遮罩层
  imageBoxState:false,
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
  SET_DRAWER_OPEN_MODAL: (state,data) =>{
    state.drawerOpenModal = data
  },
  SET_IMAGE_BOX_STATE: (state,data) =>{
    state.imageBoxState = data
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
  setDrawerOpenModal({ commit },data) {
    commit('SET_DRAWER_OPEN_MODAL',data)
  },
  setDrawerOpenData({ commit },data) {
    commit('SET_DRAWER_OPEN_TITLE',data.title)
    commit('SET_DRAWER_OPEN_STATE',data.state)
    commit('SET_DRAWER_OPEN_TYPE',data.type)
    commit('SET_DRAWER_OPEN_SIZE',data.size)
    commit('SET_DRAWER_OPEN_MODAL',data.modal)
  },
  setImageBoxState({ commit },data) {
    commit('SET_IMAGE_BOX_STATE',data)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
