<template>
  <el-container>
    <el-main
      ><main-content>
        <article-detail
          :articleDetail="$store.state.articleDetail"
          :item="
            $store.state.articleList.find(item => {
              return item._id == this.$store.state.currentId
            })
          "
        ></article-detail> </main-content
      >
    </el-main>
    <el-footer><bottom-footer></bottom-footer></el-footer>
  </el-container>
</template>

<script>
import MainContent from "components/common/MainContent.vue"
import BottomFooter from "components/common/BottomFooter.vue"
import ArticleDetail from "components/content/ArticleDetail.vue"

export default {
  name: "ArticlePage",
  components: {
    MainContent,
    BottomFooter,
    ArticleDetail,
  },
  created() {},
  activated(){
    let height = window.innerWidth>480?window.innerHeight:323
    if(window.pageYOffset) window.pageYOffset=height
    if(document.documentElement.scrollTop) document.documentElement.scrollTop=height
    if(document.body.scrollTop) document.body.scrollTop=height
  },
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

<style scoped>
@media screen and (max-width: 480px) and (min-width: 0px){
  .main-content {
    width: 95%;
    margin: 0 auto;
  }
  
}
</style>>

</style>
