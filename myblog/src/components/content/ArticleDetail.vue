<template>
  <article class="article-detail">
    <div class="article-wrap">
      <card-post :item="item"></card-post>
      <div class="article-head" v-if="!isAbout">
        <h2 class="article-title" v-cloak>{{ $store.state.currentTitle }}</h2>
        <p class="article-meta">
          <img :src="calendar" alt="时间" /> 发表于
          {{ formatDate($store.state.time) }}
          <img :src="word" alt="字数" /> 字数统计
          {{ ($store.state.length / 1000).toFixed(1) }}k
        </p>
      </div>
      <div class="article-head" v-else>
        <h2 class="article-title">我是关于页面</h2>
        <p class="article-meta">
          <img :src="calendar" alt="时间" /> 发表于
          {{ formatDate($store.state.time) }}
          <img :src="word" alt="字数" /> 字数统计 {{ $store.state.length }}
        </p>
      </div>
      <div class="article-body">
        <mavon-editor
          :value="articleDetail"
          defaultOpen="preview"
          :boxShadow="false"
          style="z-index:1;"
          :editable="false"
          :subfield="false"
          :toolbarsFlag="false"
        />
      </div>
      <div class="article-footer"></div>
    </div>
    <div class="comments-container"></div>
  </article>
</template>

<script>
import CardPost from "components/content/CardPost"
import { formatDate } from "../../mixin"
export default {
  name: "ArticleDetail",
  props: {
    articleDetail: {
      type: String,
      default: "",
    },
    item: {
      type: Object,
      default: () => {
        return {}
      },
    },
    isAbout: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    CardPost,
  },
  mixins: [formatDate],
  data() {
    return {
      calendar: require("assets/img/calendar.svg"),
      word: require("assets/img/word.svg"),
    }
  },
}
</script>

<style>

article .article-head {
  text-align: center;
}

.article-meta img {
  height: 16px;
}

.article-wrap {
  /* width: 100%; */
  background-color: rgba(255, 255, 255, 1);
  border-radius: 15px;
  padding: 20px;
  position: relative;
}

.article-head {
  padding: 0 0 30px 0;
}

.article-wrap .post-data {
  left: auto;
}

.article-wrap .post-badge {
  margin-top: 50px;
}

.article-body {
  margin-top: 10px;
  padding: 20px;
  text-align: left;
}
.article-body .v-note-wrapper{
  min-width: 0;
}
@media only screen and (max-width: 720px) and (min-width:200px){
  .article-wrap{
    padding: 10px;
  }
}
</style>
