<template>
  <div class="back-to-top" :class="{active:this.$store.state.isShow}" @click="backClick"></div>
</template>

<script>
export default {
  name:"BackToTop",
  data(){
    return{
    }
  },
  methods: {
    backClick(){
      console.log(this.$store.state.isShow);
      if(timer) return
      const distance = document.documentElement.scrollTop/100
      const timer = setInterval(() => {
        if(document.documentElement.scrollTop>80) {
          document.documentElement.scrollTop -= distance
        }else{
          document.documentElement.scrollTop --
        }
        if(document.documentElement.scrollTop<=5){
          document.documentElement.scrollTop = 0
          clearInterval(timer)
        }
      }, 1)
    },
  },
}
</script>

<style>
.back-to-top{
  cursor: pointer;
  width: 40px;
  height: 700px;
  border: 1px solid black;
  position: fixed;
  transition: all 0.5s ease-in-out;
  top: -600px;
  right: 50px;
  z-index: 4;
}
.back-to-top.active{
  top: 600px;
}
</style>