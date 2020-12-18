<template>
  <el-container>
    <el-header><nav-bar></nav-bar></el-header>
    <el-main>
      <main-content></main-content>
    </el-main>
    <el-footer height="auto"><bottom-footer></bottom-footer></el-footer>
  </el-container>
</template>

<script>
import NavBar from "components/common/NavBar.vue"
import MainContent from 'components/common/MainContent'
import BottomFooter from 'components/common/BottomFooter'
export default {
  name: "Home",
  components: {
    NavBar,
    MainContent,
    BottomFooter
  },
}
</script>

<style>

</style>
