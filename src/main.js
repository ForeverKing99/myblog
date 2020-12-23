import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import element from './element/index'
import 'assets/css/normalize.css'
import mavonEditor from "mavon-editor"
import "mavon-editor/dist/css/index.css"


router.beforeEach((to, from, next) => {
    store.commit('changepath', to.path.replace('/', ''))
  next()
})
Vue.use(mavonEditor)
Vue.config.productionTip = false
Vue.use(element)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
