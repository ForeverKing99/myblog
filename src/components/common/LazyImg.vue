<template>
  <div class="lazyImg" ref="lazy"></div>
</template>

<script>
export default {
  name: "LazyImg",
  data(){
    return{
      bg:require('assets/img/background.jpg')
    }
  },
  mounted() {
    document.title = "欢迎光临o(*￣▽￣*)o"
    this.backGradient()
  },
  methods: {
    backGradient() {
      setTimeout(() => {
        this.$refs.lazy.classList.add("lazy")
      }, 500)
    },
  },
}
</script>

<style>

.lazy {
  opacity: 0;
}
.lazyImg {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 2;
  top: 0;
  background: rgb(244,244,244);
  transition: all 0.8s ease-in-out;
}
.el-container {
  position: relative;
  z-index: 2;
}
</style>
