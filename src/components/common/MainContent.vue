<template>
  <div class="main-content">
    
    <slot></slot>
  </div>
</template>

<script>
import SiteHeader from "components/common/SiteHeader"

export default {
  name: "MainContent",
  components: {
    SiteHeader,
    
  },
}
</script>

<style>
.el-container {
  margin-top: 80px;
}
.el-main{
  display: flex;
  position: relative;
  max-width: 80vw;
  margin: 0 auto;
}
.main-content {
  float: left;
  min-height: calc(100vh - 60px);
  max-width: 780px;
  width: 38vw;
}
</style>
