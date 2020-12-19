<template>
  <el-container>
    <el-header><nav-bar></nav-bar></el-header>
    <el-main><main-content></main-content></el-main>
    <el-footer><bottom-footer></bottom-footer></el-footer>
  </el-container>
</template>

<script>
import NavBar from "components/common/NavBar.vue"
import BottomFooter from "components/common/BottomFooter"
import MainContent from "components/common/MainContent"
export default {
  name:"Code",
  components:{
    NavBar,
    BottomFooter,
    MainContent,
  },
}
</script>

<style>

</style>