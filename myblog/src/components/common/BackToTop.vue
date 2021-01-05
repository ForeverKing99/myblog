<template>
  <div class="topWrapper" :class="{ active: this.$store.state.isShow }">
    <div class="back-to-top" @click="backClick"></div>
  </div>
</template>

<script>
export default {
  name: "BackToTop",
  data() {
    return {}
  },
  methods: {
    backClick() {
      if (timer) return
      const distance = document.documentElement.scrollTop / 100
      const timer = setInterval(() => {
        if (document.documentElement.scrollTop > 80) {
          document.documentElement.scrollTop -= distance
        } else {
          document.documentElement.scrollTop--
        }
        if (document.documentElement.scrollTop <= 5) {
          document.documentElement.scrollTop = 0
          clearInterval(timer)
        }
      }, 1)
    },
  },
  mounted() {},
}
</script>

<style>
.topWrapper {
  background: url("../../assets/img/backTop.png");
  background-size: 100%;

  width: 100px;
  height: 700px;
  position: fixed;
  transition: all 0.5s ease-in-out;
  top: -900px;
  right: 100px;
  z-index: 4;
}
.topWrapper.active {
  top: 0px;
}
.back-to-top {
  width: 100px;
  height: 80px;
  border-radius: 10px;
  position: absolute;
  bottom: 0;
  cursor: pointer;
}
@media only screen and (max-width: 1200px) {
  .topWrapper.active {
    top: -100px;
  }
}
</style>
