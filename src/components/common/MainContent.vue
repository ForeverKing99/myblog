<template>
  <div class="main-content">
    <card></card>
    <card></card>
    <card></card>
    <card></card>
    <card></card>
    <card></card>
    <card></card>
  </div>
</template>

<script>
import Card from 'components/content/Card'
export default {
  name: "MainContent",
  components:{
    Card
  }
}
</script>

<style>
.main-content{
  margin-top: 100px;
}
</style>
