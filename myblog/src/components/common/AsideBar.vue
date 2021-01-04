<template>
  <div class="aside-bar" ref="aside">
    <div class="sitebar-inner" :class="{ fix: $store.state.isFix }">
      <el-tabs type="border-card" v-model="$store.state.aside">
        <el-tab-pane label="文章目录" name="article"
          ><div class="article-post">
            <ul class="post-ul">
              <li
                v-for="(item, index) in $store.state.articleDirectory"
                :key="index"
              >
                {{ item }}
              </li>
            </ul>
          </div></el-tab-pane
        >
        <el-tab-pane label="关于我" name="me"
          ><div class="head-img"></div>
          <div class="social-link">
            <p>
              <a href="tencent://AddContact/?fromId=50&fromSubId=1&subcmd=all&uin=571588677" target="_blank"
                ><el-button
                  ><img :src="tencent" alt="" /> QQ 571588677</el-button
                ></a
              >
            </p>
            <p>
              <a href="https://github.com/ForeverKing99" target="_blank"
                ><el-button
                  ><img :src="git" alt="GitHub" /> GitHub
                  https://github.com/ForeverKing99</el-button
                ></a
              >
            </p>
            <p>
              <a href="https://space.bilibili.com/19315787" target="_blank"
                ><el-button
                  ><img :src="blbl" alt="b站" /> bilibili
                  https://space.bilibili.com/19315787</el-button
                ></a
              >
            </p>
            <p>
              <a href="http://kingforever.club" target="_blank"
                ><el-button
                  ><img :src="www" alt="站点" /> 站点
                  http://kingforever.club</el-button
                ></a
              >
            </p>
          </div>
          <div class="hobby">
            <div class="hobby-left">
              喜欢吃啥<br />
              有无对象？<br />
              玩什么游戏<br />
              兴趣爱好<br />
            </div>
            <div class="hobby-right">
              香的辣的<br />
              一个人的夜我的心应该放在哪里<br />
              LOL<br />
              运动健身看书网上冲浪敲代码<br />
            </div></div
        ></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { watchOne } from "../../mixin"
export default {
  name: "AsideBar",
  data() {
    return {
      headImg: require("assets/img/headImg.jpg"),
      tencent: require("assets/img/QQ.svg"),
      blbl: require("assets/img/blbl.svg"),
      git: require("assets/img/GitHub.svg"),
      www: require("assets/img/head.svg"),
    }
  },
  methods: {},
  mounted() {
    if (
      this.$store.state.currentPath.indexOf("articlePage") < 0 ||
      this.$store.state.currentPath.indexOf("about") >= 0
    ) {
      document.getElementsByClassName("el-tabs__header")[0].style.display =
        "none"
      this.$store.state.aside = "me"
    } else {
      document.getElementsByClassName("el-tabs__header")[0].style.display =
        "flex"
      this.$store.state.aside = "article"
    }
  },
  mixins: [watchOne],
}
</script>

<style>
.aside-bar {
  width: 336px;
  margin-left: 100px;
}
.sitebar-inner {
  overflow: hidden;
  border-radius: 15px;
}
.sitebar-inner.fix {
  position: fixed;
  top: 100px;
}
.head-img {
  width: 300px;
  height: 200px;
  background: url("../../assets/img/headImg.jpg");
  background-size: 100% 100%;
  border-radius: 10px;
}
.sitebar-inner .el-tabs__header {
  display: flex;
  justify-content: center;
}
.sitebar-inner .el-tabs__header.noshow {
  display: none;
}
.sitebar-inner .el-tabs__header {
  border: none;
  background: white;
}
.sitebar-inner .el-tabs--border-card > .el-tabs__header .el-tabs__item {
  border: none;
}
.sitebar-inner
  .el-tabs--border-card
  > .el-tabs__header
  .el-tabs__item.is-active {
  color: #fc6423;
}
.sitebar-inner
  .el-tabs--border-card
  > .el-tabs__header
  .el-tabs__item:not(.is-disabled):hover {
  color: #fc6423;
}
.sitebar-inner .el-tab-pane {
  width: 302px;
}
.social-link p {
  margin: 10px auto;
  padding: 0 10px;
}
.social-link p img {
  width: 16px;
  vertical-align: middle;
}
.social-link .el-button:hover {
  transform: scale(1.1);
  transition: 0.3s ease;
}
.social-link p .el-button {
  background: #e6f4f9cc;
  outline: none;
  padding: 5px 10px;
  border-radius: 10px;
}
.social-link p span {
  font-size: 12px;
}
.hobby {
  font-size: 14px;
  padding: 5px;
}
.hobby .hobby-left {
  float: left;
  margin-right: 20px;
}
.article-post li {
  list-style: none;
  margin: 5px 0;
}
</style>
