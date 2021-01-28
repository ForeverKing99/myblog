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
.el-main {
  display: flex;
  position: relative;
  margin: 0 auto;
}
.main-content {
  min-height: calc(100vh - 60px);
  width: 768px;
}
@media screen and (max-width: 480px) and (min-width: 0px) {
  #app .site-header{
    padding-top: 76px;
  }
  .el-container {
    width: 100%;
    /* margin-top: 156px; */
  }
  .el-main {
    width: 100%;
    margin: 0;
    padding: 20px 0;
  }
  .main-content {
    width: 90%;
    margin: 0 auto;
  }
  .el-card .el-card__body {
    padding: 10px 20px;
  }
  .article-wrap .article-body {
    margin-top: 10px;
    padding: 0px;
    text-align: left;
  }
  .v-show-content {
    padding: 0 5px !important;
  }
}
@media only screen and (max-width: 720px) and (min-width: 480px) {
  .el-container {
    width: 100%;
  }
  .main-content {
    width: 80%;
    margin: 0 auto;
  }
  .el-main {
    width: 100%;
    margin: 0;
    padding: 20px 0;
  }
}
@media only screen and (max-width: 1200px) and (min-width: 720px) {
  .main-content {
    width: 600px;
  }
}
</style>
