import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShow: false,
    currentPath: '',
    aside: 'me',
    isFix: false,
    currentTitle: '',
    articleList: [],
    searchList: [],
    articleDetail: '',
    articleDirectory: [],
    length: 0,
    time: 0,
    login: false,
    currentId:0,
    startTime:1609948517156,
    date:''
  },
  mutations: {
    backshow(state, payload) {
      state.isShow = payload
    },
    isfix(state, payload) {
      state.isFix = payload
    },
    changepath(state, payload) {
      state.currentPath = payload
    },
    changeDirectory(state, payload) {
      state.articleDirectory = payload.map(function (item) {
        var itemcount = 0
        for (let i = 0; i < item.length; i++) {
          if (item[i] == '#') itemcount++
        }
        if (itemcount == 3) return item.replace(/\#/g, '')
        if (itemcount == 4) return item.replace(/\#/g, '')
      })
    },
    changeDate(state, payload) {
      state.time = payload.time
      state.length = payload.length
    },
    changeId(state, payload) {
      state.currentId = payload
    },
    login(state, payload) {
      state.login = payload
    },
    listChange(state, payload) {
      state.searchList = state.articleList.filter(item => {
        return item.tab == payload
      })
    },
    changedate(state, payload){
      state.date = payload.day+'天'+payload.hour+'小时'+payload.min+'分'+payload.sec+'秒'
    }
  },
  actions: {

  }
})
