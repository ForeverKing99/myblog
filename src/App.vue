<template>
  <div id="app">
    <router-view></router-view>
    <!-- <background></background> -->
  </div>
</template>
<script>
export default {
  name: "APP",
  components: {
  },
  mounted() {
    document.title="欢迎光临o(*￣▽￣*)o"
  },
}
</script>
<style>
#app {
  background: url('assets/img/background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
