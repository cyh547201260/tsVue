import Cookies from 'js-cookie'

const state = {
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
    withoutAnimation: false
  },
  device: 'desktop',
  appsCenterShow:false,
  appsList:[],
  addRoutes:[],
  addRouters:[],
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', 1)
    } else {
      Cookies.set('sidebarStatus', 0)
    }
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    Cookies.set('sidebarStatus', 0)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
  TOGGLE_APPS_CENTER:( state) => {
    state.appsCenterShow = !state.appsCenterShow
  },
  SET_APPS_LIST: (state,appsList) => {
    state.appsList = appsList
  },
  ADD_ROUTES: (state,addRoutes) =>{
    state.addRoutes = addRoutes
  },
  ADD_ROUTERS: (state,addRouters) =>{
    state.addRouters = addRouters
  }
}

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },
  toggleAppsCenter({ commit }) {
    commit('TOGGLE_APPS_CENTER')
  },
  setAppsList({ commit } , appsList) {
    commit('SET_APPS_LIST', appsList)
  },
  addRoutes({ commit } , addRoutes) {
    commit('ADD_ROUTES', addRoutes)
  },
  setRouters({ commit } , addRouters) {
    console.log('ADD_ROUTERS')
    commit('ADD_ROUTERS', addRouters)
  },

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
