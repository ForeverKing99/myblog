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
/* @media only screen and (max-width: 500px) and (min-width:300px){
  .main-content {
    width: 300px;
  }
} */
@media only screen and (max-width: 720px) and (min-width:200px){
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
@media only screen and (max-width: 1200px) and (min-width:720px){
  .main-content {
    width: 600px;
  }
}

</style>
