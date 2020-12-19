<template>
  <div id="app">
    <router-view></router-view>
    <lazy-img></lazy-img>
  </div>
</template>
<script>
import LazyImg from 'components/common/LazyImg'
export default {
  name: "APP",
  components: {
    LazyImg
  },
  data() {
    return {
     
    }
  },
}
</script>
<style>
#app {
  position: relative;
  z-index: 0;
  background: url('assets/img/background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
