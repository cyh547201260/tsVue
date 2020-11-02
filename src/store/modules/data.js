import Cookies from 'js-cookie'

const state = {
  caseDetailNavIndex:1,
  filterOptions:[{}],
  tableDataList:[],
}

const mutations = {
  SET_CASE_DETAIL_NAV_INDEX: (state,index) =>{
    state.caseDetailNavIndex = index
  },
  SET_LIST_FILTER_OPTIONS: (state,data) =>{
    state.filterOptions = data
  },
  SET_TABLE_DATA_LIST: (state,data) =>{
    state.tableDataList = data
  },
}

const actions = {
  setCaseDetailNavIndex({ commit },index) {
    commit('SET_CASE_DETAIL_NAV_INDEX',index)
  },
  setListFilterOptions({ commit },data) {
    commit('SET_LIST_FILTER_OPTIONS',data)
  },
  setTableDataList({ commit },data) {
    commit('SET_TABLE_DATA_LIST',data)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
