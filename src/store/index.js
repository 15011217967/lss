import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
// import actions from './actions'
Vue.use(Vuex)

const vueStore = new Vuex.Store({
  state: state,
  mutations,
  // actions,
  modules: {
    kk:11,
    ss:22
  }
})
export default vueStore;