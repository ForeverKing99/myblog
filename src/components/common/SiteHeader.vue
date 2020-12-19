<template>
  <div class="site-header" ref="active">
    <div class="site-img" ref="lazy"></div>
    <div class="site-master"></div>
  </div>
</template>

<script>
export default {
  name: "SiteHeader",
  data() {
    return {
      girl: require("assets/img/girl.png"),
    }
  },
  mounted() {
    this.backGradient()
  },
  methods: {
    backGradient() {
      setTimeout(() => {
        this.$refs.lazy.classList.add("show")
      }, 500)
    },
  },
}
</script>

<style>
.show {
  opacity: 1 !important;
}
.site-header {
  height: 40vw;
  width: 100vw;
  min-height: 40vh;
  margin: -80px auto 0;
  position: relative;
  right: 20px;
  z-index: 0;
}

.site-img {
  width: 100%;
  height: 100%;
  opacity: 0;
  background: url("../../assets/img/girl.png");
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 1s ease-in-out;
}
</style>
