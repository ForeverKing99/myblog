<template>
  <article class="card">
    <card-post :item="item"></card-post>
    <el-card
      ><card-title
        :articleTitle="articleTitle"
        :articleLength="articleLength"
        :articletime="articleTime"
      ></card-title>
      <card-content :articleBody="articleBody"></card-content>
      <button class="enter" @click="getArticlePage">阅读全文 ></button>
    </el-card>
  </article>
</template>

<script>
import CardTitle from "components/content/CardTitle"
import CardPost from "components/content/CardPost"
import CardContent from "components/content/CardContent"
import { getArticleDetail } from "network/articleList"

export default {
  name: "Card",
  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      },
    },
    id: {
      type: String,
    },
  },
  data() {
    return {
      articleTitle: this.item.title,
      articleBody: this.item.summary,
      articleLength: this.item.length,
      articleTime: this.item.time,
      articleTab: this.item.tab,
      articleId: this.item._id,
    }
  },
  components: {
    CardTitle,
    CardContent,
    CardPost,
  },
  methods: {
    getArticlePage() {
      this.$router.push("/articlePage/" + this.articleTitle)
      getArticleDetail(this.articleId)
        .then(res => {
          this.$store.state.articleDetail = res.data[0].content
          const obj = {
            time: res.data[0].time,
            length: res.data[0].length,
          }
          this.$store.commit("changeDate", obj)
          this.$store.commit("changeDirectory", this.getTitle(res.data.content))
        })
        .catch(err => {})
      this.$store.state.currentTitle = this.item.title
      this.$store.commit("changeId", this.articleId)
    },
    getTitle(str) {
      var title = []
      var test = str.match(/^[\#]+[\s][\.]*[\u4e00-\u9fa5_a-zA-Z0-9]+/gm)
      if (test) {
        for (let i = 0; i < test.length; i++) {
          title.push(test[i].replace(" ", ""))
        }
      }
      return title
    },
  },
}
</script>

<style>
.card {
  width: 70%;
  margin: 80px auto;
  max-width: 768px;
  position: relative;
}
.card-title .post-meta {
  font-size: 12px;
}
.el-card {
  width: 100%;
  background: rgba(255, 255, 255, 0.4);
  border: none;
  border-radius: 10px;
}

.el-card__body {
  padding: 20px 40px;
  font-size: 14px;
  position: relative;
}
.enter {
  margin: 0 auto;
  border-radius: 5px;
  font-size: 13px;
  display: block;
  outline: none;
  cursor: pointer;
  height: 25px;
  color: #ffffff;
  line-height: 25px;
  padding: 0;
  background: #97dffd;
  border: none;
  padding: 0 10px;
}
.enter:hover {
  border-color: #222;
  color: #fff;
  background: #222;
  transform: scale(1.1);
  transition: all 0.3s ease;
}
@media only screen and (max-width: 1200px) and (min-width: 720px) {
  .card {
    margin: 80px auto;
    width: 90%;
  }
}
@media only screen and (max-width: 720px) and (min-width: 200px) {
  .card {
    margin: 80px 0;
    width: 100%;
  }
}
</style>
