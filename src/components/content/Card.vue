<template>
  <div class="card">
    <el-card><div slot="header">我是一个标题</div>
    <div>我是内容</div>
    </el-card>
  </div>
</template>

<script>
export default {
  name:'Card'
}
</script>

<style>
 .card{
   width: 70%;
   height: 25vh;
   margin: 80px auto;
   max-width: 768px;
 }
 .el-card{
   width: 100%;
   height: 100%;
   background: rgba(255,255,255,0.4);
   border: none;
 }
 .el-card__header{
   border-bottom: none;
 }
</style>