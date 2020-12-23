import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShow:false,
    currentPath:'',
    aside:'article',
    isFix:false,
    currentTitle:'',
    articleList:[],
    articleDetail:{}
  },
  mutations: {
    backshow(state,payload){
      state.isShow = payload
    },
    isfix(state,payload){
      state.isFix = payload
    },
    changepath(state,payload){
      state.currentPath = payload
    },
  },
  actions: {

  }
})
