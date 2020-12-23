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
import { windowScroll } from "./mixin"

import { getArticleList } from "./network/articleList"

export default {
  name: "APP",
  components: {
    LazyImg,
    NavBar,
    SiteHeader,
    BackToTop,
  },
  mixins: [windowScroll],
  mounted() {
    window.addEventListener("scroll", this.handleScroll)
    getArticleList().then(res => {
      this.$store.state.articleList = res
      console.log(res)
    })
  },
}
</script>
<style>
body {
  overflow-x: hidden;
}
#app {
  position: relative;
  overflow-x: hidden;
  z-index: 0;
  background: url("assets/img/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
