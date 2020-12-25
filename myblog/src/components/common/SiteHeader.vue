<template>
  <div class="site-header" ref="active">
    <div class="site-img" ref="lazy">
      <video :src="backvideo" autoplay loop muted></video>
    </div>
    <div class="site-master">
      <el-card class="box-card">
        <div class="avatar"><img :src="avatar" alt="头像" /></div>
        <p class="motto">身虽囿核桃 心为无限王</p>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "SiteHeader",
  data() {
    return {
      girl: require("assets/img/girl.png"),
      avatar: require("assets/img/avatar.jpg"),
      backvideo: require("assets/img/backvideo.mp4"),
    }
  },
  mounted() {
    this.backGradient()
  },
  methods: {
    backGradient() {
      setTimeout(() => {
        this.$refs.lazy.classList.add("show")
      }, 900)
    },
  },
}
</script>

<style>
.show {
  opacity: 1 !important;
}
.site-header {
  height: 100vh;
  width: calc(100vw - 17px);
  min-height: 40vh;
  margin: -60px auto 0;
  position: relative;
  z-index: 0;
}
.site-img {
  width: 100%;
  height: 100%;
  opacity: 0;
  overflow: hidden;
  /* background: url("../../assets/img/girl.png");
  background-repeat: no-repeat;
  background-size: cover; */
  transition: all 1s ease-in-out;
}
.site-img video {
  /* height: 100%;
  width: 100%; */
}
.site-master {
  height: 25vh;
  width: 50vw;
  max-width: 1024px;
  margin: 0 auto;
  position: relative;
  bottom: 234px;
}
.el-card.box-card {
  width: 100%;
  height: 100%;
  background: rgba(230, 244, 249, 0.7);
  border: none;
}
.box-card .el-card__body {
  height: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
}
.avatar {
  height: 50%;
  text-align: center;
}
.avatar img {
  width: 100px;
  border-radius: 60px;
}
.motto {
  height: 50%;
  text-align: center;
  /* padding-top: 30px; */
  font-size: 30px;
  color: #97dffd;
  text-shadow: 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
    0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
    0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
    0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
    0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
    0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
    0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
    0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
    0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff,
    0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff;
}
</style>
