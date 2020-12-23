<template
  >
    <el-container>
      <el-main
        ><main-content>
          <article-detail :articleDetail="$store.state.articleDetail"></article-detail> </main-content
        ><aside-bar></aside-bar>
      </el-main>
      <el-footer><bottom-footer></bottom-footer></el-footer> </el-container
  >
</template>

<script>
import MainContent from "components/common/MainContent.vue"
import BottomFooter from "components/common/BottomFooter.vue"
import ArticleDetail from "components/content/ArticleDetail.vue"
import AsideBar from "components/common/AsideBar.vue"
import {realPath} from "../../mixin.js"

export default {
  name: "ArticlePage",
  components: {
    MainContent,
    BottomFooter,
    ArticleDetail,
    AsideBar,
  },
  created() {
  },
  mixins: [realPath],
  computed: {
  }
}
</script>

<style></style>
