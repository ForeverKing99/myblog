<template>
  <div class="main-content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MainContent",
}
</script>

<style>
.el-container {
  margin-top: 80px;
}
.el-main{
  display: flex;
  position: relative;
  margin: 0 auto;
}
.main-content {
  min-height: calc(100vh - 60px);
  width: 768px;
}
</style>
