import Vue from 'vue'
import Router from 'vue-router'
const NavBar = () => import('components/common/NavBar.vue')
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: NavBar
    },
    {
      path: '/about',
      name: 'About',
      component: NavBar
    },
    {
      path:'/category',
      name:'Category',
      component: NavBar
    }
  ]
})
