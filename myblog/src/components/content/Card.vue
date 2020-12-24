<template>
  <article class="card">
    <card-post></card-post>
    <el-card
      ><card-title :articleTitle="articleTitle"></card-title>
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
  props:{
    item:{
      type:Object,
      default:()=>{
        return {}
      }
    },
    id:{
      type:Number,
    }
  },
  data(){
    return{
      articleTitle:this.item.title,
      articleBody:this.item.summary
    }
  },
  components: {
    CardTitle,
    CardContent,
    CardPost,
  },
  methods: {
    getArticlePage(){
      this.$router.push('/articlePage/' + this.id)
      getArticleDetail(this.id).then((res)=>{
        this.$store.state.articleDetail = res.data.content
      })
      this.$store.state.currentTitle = this.item.title
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
.el-card {
  width: 100%;
  background: rgba(255, 255, 255, 0.4);
  border: none;
  border-radius: 10px;
}

.el-card__body {
  padding: 20px 40px;
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
</style>
