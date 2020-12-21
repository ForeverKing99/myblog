<template>
  <div id="app">
    <nav-bar></nav-bar>
    <site-header></site-header>
    <keep-alive include="AsideBar BottomFooter">
    <router-view></router-view>
    </keep-alive>
    <back-to-top></back-to-top>
    
    <lazy-img></lazy-img>
  </div>
</template>
<script>
import LazyImg from 'components/common/LazyImg'
import SiteHeader from 'components/common/SiteHeader'
import NavBar from "components/common/NavBar.vue"
import BackToTop from "components/common/BackToTop.vue"
export default {
  name: "APP",
  components: {
    LazyImg,
    NavBar,
    SiteHeader,
    BackToTop,
  },
}
</script>
<style>
body{
  overflow-x: hidden
}
#app {
  position: relative;
  z-index: 0;
  background: url('assets/img/background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
