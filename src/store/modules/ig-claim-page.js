import Cookies from 'js-cookie'

const state = {
  pageTotal: 0,
  pageNum: 1,
  pageSize: 10,
  currentPage:1,
}

const mutations = {
  SET_PAGE_TOTAL: (state,data) =>{
    state.pageTotal = data
  },
  SET_PAGE_PAGE_NUM: (state,data) =>{
    state.pageNum = data
  },
  SET_PAGE_PAGE_SIZE: (state,data) =>{
    state.pageSize = data
  },
  SET_PAGE_DATA: (state,data) =>{
    state.pageData = data
  },
  SET_PAGE_CURRENT_PAGE: (state,data) =>{
    state.currentPage = data
  },
}

const actions = {
  setPageTotal({ commit },data) {
    commit('SET_PAGE_TOTAL',data)
  },
  setPagePageNum({ commit },data) {
    commit('SET_PAGE_PAGE_NUM',data)
  },
  setPagePageSize({ commit },data) {
    commit('SET_PAGE_PAGE_SIZE',data)
  },
  setPageCurrentPage({ commit },data) {
    commit('SET_PAGE_CURRENT_PAGE',data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
