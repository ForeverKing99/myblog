<template>
  <el-container>
    <el-main><main-content></main-content></el-main>
    <el-footer><bottom-footer></bottom-footer></el-footer>
  </el-container>
</template>

<script>
import BottomFooter from "components/common/BottomFooter"
import MainContent from "components/common/MainContent"
export default {
  name:"Code",
  components:{
    BottomFooter,
    MainContent,
  },
}
</script>

<style>

</style>