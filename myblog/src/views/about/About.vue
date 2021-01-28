<template>
  <el-container>
    <el-main
      ><main-content>
        <article-detail :isAbout="true"></article-detail> </main-content
      >
    </el-main>
    <el-footer><bottom-footer></bottom-footer></el-footer>
  </el-container>
</template>

<script>
import MainContent from "components/common/MainContent.vue"
import BottomFooter from "components/common/BottomFooter.vue"
import ArticleDetail from "components/content/ArticleDetail.vue"
import AsideBar from "components/common/AsideBar.vue"
import { getArticleDetail } from "network/articleList"

export default {
  name: "About",
  data(){
    return{
      articleDetail:()=>{
        return {}
      },
      id:'about'
    }
  },
  activated(){
    document.documentElement.scrollTop= window.innerHeight
  },
  components: {
    MainContent,
    BottomFooter,
    ArticleDetail,
    AsideBar,
  },
}
</script>

<style></style>
