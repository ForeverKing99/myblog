<template>
  <div class="backdrop">
    <img :src="img" alt="">
  </div>
</template>

<script>
export default {
  name:'Background',
  data(){
    return {
      img: require('assets/img/background.jpg')
    }
  }
}
</script>

<style>
.backdrop{
  overflow: hidden;
  position: absolute;;
  top: 0;
  height: 100vh;
  width: calc(100vw - 17px);
}
.backdrop img{
  width: 1920px;
  height: 1080px;
}
</style>