<template><keep-alive include="AsideBar">
  <el-container>
    <el-main>
      <main-content>
        <card v-for="item in $store.state.articleList" :key="item.id" :item='item' :id="item.id"></card>
        
      </main-content>
       
      <aside-bar></aside-bar
    >
    
    
    </el-main>
    <el-footer><bottom-footer></bottom-footer></el-footer>
  </el-container></keep-alive>
</template>

<script>
import MainContent from "components/common/MainContent"
import BottomFooter from "components/common/BottomFooter"
import Card from "components/content/Card"
import AsideBar from "components/common/AsideBar.vue"
export default {
  name: "Home",
  components: {
    MainContent,
    BottomFooter,
    Card,
    AsideBar,
  },
}
</script>

<style>

</style>
