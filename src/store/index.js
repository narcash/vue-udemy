import Vue from 'vue'
import Vuex from 'vuex'
import auth from '@/store/modules/auth'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth
  }
})
