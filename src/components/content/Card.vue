<template>
  <article class="card">
    <el-card
      ><card-title></card-title>
      <card-content></card-content>
      <button class="enter">阅读全文 ></button>
    </el-card>
  </article>
</template>

<script>
import CardTitle from "components/content/CardTitle"
import CardContent from "components/content/CardContent"
export default {
  name: "Card",
  components: {
    CardTitle,
    CardContent,
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
