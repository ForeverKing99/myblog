<template>
  <div class="card-title">
    <h2>{{ articleTitle }}</h2>
    <div class="post-meta">
      <span
        ><img :src="calendar" alt="时间" /> 发表于 {{ articleDate }}
        <img :src="word" alt="字数" /> 字数统计
        {{ (articleLength / 1000).toFixed(1) }}k</span
      >
    </div>
  </div>
</template>

<script>
import { formatDate } from "../../mixin"
export default {
  name: "CardTitle",
  props: {
    articleTitle: {
      type: String,
      default: "",
    },
    articleLength: {
      type: Number,
      default: 0,
    },
    articletime: {
      type: Number,
      default: 0,
    },
  },
  mixins: [formatDate],
  data() {
    return {
      calendar: require("assets/img/calendar.svg"),
      word: require("assets/img/word.svg"),
      articleDate: this.formatDate(this.articletime),
    }
  },
}
</script>

<style>
.card-title h2 {
  text-align: center;
  margin: 0 auto;
}
.post-meta {
  text-align: center;
  padding-top: 15px;
  font-size: 14px;
  line-height: 14px;
}

.post-meta img {
  height: 14px;
  vertical-align: middle;
}
</style>
