<template>
  <el-container>
    <el-header> <nav-bar> </nav-bar></el-header>
    <el-main
      ><main-content>
        <article-detail></article-detail>
      </main-content></el-main
    >
    <el-footer><bottom-footer></bottom-footer></el-footer>
  </el-container>
</template>

<script>
import NavBar from "components/common/NavBar.vue"
import MainContent from "components/common/MainContent.vue"
import BottomFooter from "components/common/BottomFooter.vue"
import ArticleDetail from 'components/content/ArticleDetail.vue'
export default {
  name: "About",
  components: {
    NavBar,
    MainContent,
    BottomFooter,
    ArticleDetail,
  },
}
</script>

<style>
article div{
  text-align: center;
}
</style>
