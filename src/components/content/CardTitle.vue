<template>
  <div class="card-title">
    <h2>我真的是一个标题</h2>
    <div class="post-meta">
      <span><img :src="calendar" alt="时间"> 发表于 2020-12-19 <img :src="word" alt="字数"> 字数统计 0.8k</span>
    </div>
  </div>
</template>

<script>
export default {
  name:"CardTitle",
  data(){
    return{
      calendar:require('assets/img/calendar.svg'),
      word:require('assets/img/word.svg')
    }
  }
}
</script>

<style>
.card-title h2{
  text-align: center;
  margin: 0 auto;
}
.card-title{
  
}
.post-meta{
  text-align: center;
  padding-top: 15px;
  font-size: 14px;
  line-height: 14px;
}

.post-meta img{
  height:14px;
  vertical-align: middle;
}
</style>