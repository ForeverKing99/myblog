<template>
  <el-container>
    <el-main><main-content><card v-for="item in $store.state.searchList" :key="item.id" :item='item' :id="item.id"></card></main-content><aside-bar></aside-bar
    ></el-main>
    <el-footer><bottom-footer></bottom-footer></el-footer>
  </el-container>
</template>

<script>
import BottomFooter from "components/common/BottomFooter"
import MainContent from "components/common/MainContent"
import Card from "components/content/Card"
import AsideBar from "components/common/AsideBar.vue"
import {search} from '../../mixin'
export default {
  name:"Code",
  components:{
    BottomFooter,
    MainContent,
    Card,
    AsideBar,
  },
}
</script>

<style>

</style>