<template>
  <div class="main-content">
    <site-header></site-header>
   <slot></slot>
  </div>
</template>

<script>
import SiteHeader from 'components/common/SiteHeader'
export default {
  name: "MainContent",
  components:{
    SiteHeader,
  }
}
</script>

<style>
.main-content{
  min-height: calc(100vh - 60px);
}
</style>
