<template>
  <el-container>
    <el-main
      ><main-content>
        <article-detail
          :articleDetail="$store.state.articleDetail"
        ></article-detail> </main-content
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

export default {
  name: "ArticlePage",
  components: {
    MainContent,
    BottomFooter,
    ArticleDetail,
    AsideBar,
  },
  created() {},
  computed: {},
  methods: {
    getTitle(str) {
      var bigtitle = []
      var smalltitle = []
      var big = str.match(/^[\#]{2,2}[\s][\u4e00-\u9fa5_a-zA-Z0-9]+\n/gm)
      var small = str.match(/^[\#]{3,3}[\s][\u4e00-\u9fa5_a-zA-Z0-9]+\n/gm)
      for (let i = 0; i < big.length; i++) {
        bigtitle.push(...big[i].match(/[\u4e00-\u9fa5_a-zA-Z0-9]+/gm))
      }
      for (let i = 0; i < small.length; i++) {
        smalltitle.push(...small[i].match(/[\u4e00-\u9fa5_a-zA-Z0-9]+/gm))
      }
      return [bigtitle, smalltitle]
    },
  },
}
</script>

<style></style>
