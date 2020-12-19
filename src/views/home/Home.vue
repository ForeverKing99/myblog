<template>
  <el-container>
    <el-header><nav-bar></nav-bar></el-header>
    <el-main>
      <main-content>
        <card></card>
        <card></card>
        <card></card>
        <card></card>
        <card></card>
        <card></card>
        <card></card>
      </main-content>
    </el-main>
    <el-footer><bottom-footer></bottom-footer></el-footer>
  </el-container>
</template>

<script>
import NavBar from "components/common/NavBar.vue"
import MainContent from "components/common/MainContent"
import BottomFooter from "components/common/BottomFooter"
import Card from "components/content/Card"
export default {
  name: "Home",
  components: {
    NavBar,
    MainContent,
    BottomFooter,
    Card,
  },
}
</script>

<style>

</style>
