<template>
  <div id="app">
    <nav-bar></nav-bar>
    <site-header></site-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <back-to-top></back-to-top>
    <lazy-img></lazy-img>
  </div>
</template>
<script>
import LazyImg from "components/common/LazyImg"
import SiteHeader from "components/common/SiteHeader"
import NavBar from "components/common/NavBar.vue"
import BackToTop from "components/common/BackToTop.vue"
import { windowScroll, search } from "./mixin"
import { getArticleList } from "./network/articleList"

export default {
  name: "APP",
  data(){
    return{
      timer:''
    }
  },
  components: {
    LazyImg,
    NavBar,
    SiteHeader,
    BackToTop,
  },
  methods: {
    changeTime(){
      const time = this.$store.state.startTime
      const newTime = new Date().getTime()
      const reduceTime = newTime - time
      const day = Math.floor(reduceTime/86400000)
      const hour = Math.floor((reduceTime/3600000)%24)
      const min = Math.floor((reduceTime/60000)%60)
      const sec = Math.floor((reduceTime/1000)%60)
      const obj = {day,hour,min,sec}
      this.$store.commit("changedate",obj)
    }
  },
  mixins: [windowScroll, search],
  mounted() {
    window.addEventListener("scroll", this.handleScroll)
    getArticleList().then(res => {
      this.$store.state.articleList.push(...res.data)
    })
    this.timer = setInterval(this.changeTime,1000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
}
</script>
<style>
h2 {
  text-shadow: 1px 1px 3px rgba(68, 64, 0, 0.45);
}
body {
  overflow-x: hidden;
}
#app {
  position: relative;
  z-index: 0;
  background: url("assets/img/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
@media screen and (max-width: 480px) {
  #app {
    background: url("assets/img/background2.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
}
</style>
