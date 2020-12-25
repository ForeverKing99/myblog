<template>
  <el-container>
    <el-main
      ><main-content>
        <article-detail :isAbout="true"></article-detail> </main-content
      ><aside-bar></aside-bar>
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
  components: {
    MainContent,
    BottomFooter,
    ArticleDetail,
    AsideBar,
  },
  created() {
    // console.log("我是abaoutcrated")
    // getArticleDetail(this.id).then((res)=>{
    //     this.articleDetail = res
    //   })
  },
}
</script>

<style></style>
