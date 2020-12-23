<template>
  <div class="card-content">
    <p class="content-body">{{articleBody}}</p>
    
  </div>
</template>

<script>
export default {
  name:"CardContent",
  props:{
    articleBody:{
      type:String,
      default:''
    }
  }
}
</script>

<style>

</style>