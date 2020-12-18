<template>
  <div id="app">
    <router-view></router-view>
    <background></background>
    <div class="one"></div>
    <div class="two"></div>
  </div>
</template>
<script>
import Background from 'components/common/Background'
export default {
  name:'APP',
  components:{
    Background
  }
}
</script>
<style>
#app{
  overflow: hidden;
}
.one{
  width: 980px;
  height: 400px;
  border: 2px solid black;
  position: relative;
  margin: 0 auto 40px;
  z-index: 999;
}
.two{
  width: 980px;
  height: 400px;
  border: 2px solid black;
  position: relative;
  margin: 0 auto ;
  z-index: 999;
}
</style>
