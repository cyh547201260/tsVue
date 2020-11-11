import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import data from './modules/ig-claim-data'
import page from './modules/ig-claim-page'
import detail from './modules/ig-claim-detail'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    data,
    page,
    detail
  },
  getters
})

export default store
