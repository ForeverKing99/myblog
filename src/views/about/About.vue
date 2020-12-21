<template>
  <el-container>
    <el-main
      ><main-content>
        <article-detail></article-detail>
      </main-content>
      <aside-bar></aside-bar
    ></el-main>
    <el-footer><bottom-footer></bottom-footer></el-footer>
  </el-container>
</template>

<script>
import MainContent from "components/common/MainContent.vue"
import BottomFooter from "components/common/BottomFooter.vue"
import ArticleDetail from "components/content/ArticleDetail.vue"
import AsideBar from "components/common/AsideBar.vue"
export default {
  name: "About",
  components: {
    MainContent,
    BottomFooter,
    ArticleDetail,
    AsideBar,
  },
}
</script>

<style>
article div {
  text-align: center;
}
</style>
