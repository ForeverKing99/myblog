import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('views/home/Home.vue')
const About = () => import('views/about/About.vue')
const ArticleEditor = () => import('views/articleEditor/ArticleEditor.vue')
const Life = () => import('views/life/Life.vue')
const Code = () => import('views/code/Code.vue')
const Note = () => import('views/note/Note.vue')
const ArticlePage = () => import('views/articlePage/ArticlePage.vue')

Vue.use(Router)




export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      // children: [
      //   {
      //     path: 'articlePage/:id',
      //     name: 'ArticlePage',
      //     component: ArticlePage
      //   }]

    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/articleEditor',
      name: 'ArticleEditor',
      component: ArticleEditor
    },
    {
      path: '/note',
      name: 'Note',
      component: Note
    },
    {
      path: '/life',
      name: 'Life',
      component: Life
    },
    {
      path: '/code',
      name: 'Code',
      component: Code
    },
    {
      path:'/articlePage/:id',
      name:'ArticlePage',
      component:ArticlePage
    }
  ]
})
