<template
  ><keep-alive include="AsideBar">
    <el-container>
      <el-main
        ><main-content>
          <article-detail></article-detail> </main-content
        ><aside-bar></aside-bar>
      </el-main>
      <el-footer><bottom-footer></bottom-footer></el-footer> </el-container
  ></keep-alive>
</template>

<script>
import MainContent from "components/common/MainContent.vue"
import BottomFooter from "components/common/BottomFooter.vue"
import ArticleDetail from "components/content/ArticleDetail.vue"
import AsideBar from "components/common/AsideBar.vue"
import {realPath} from "../../mixin.js"

export default {
  name: "About",
  components: {
    MainContent,
    BottomFooter,
    ArticleDetail,
    AsideBar,
  },
  created() {
    console.log("我是abaoutcrated")
  },
  mixins: [realPath],
}
</script>

<style></style>
