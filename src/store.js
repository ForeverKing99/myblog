import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShow:false,
    currentPath:'',
    aside:'article',
    isFix:false,
  },
  mutations: {
    backshow(state,payload){
      state.isShow = payload
    },
    asideClick(state,payload){
      state.aside = payload
    },
    isfix(state,payload){
      state.isFix = payload
    }
  },
  actions: {

  }
})
