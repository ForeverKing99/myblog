<template>
  <div class="bottom-footer">
    <div class="left">
      <p>©2020 Forever</p>
      <p>此博客已运行{{$store.state.date}}</p>
    </div>
    <div class="right">
      <p class="tencent">
        托管于
        <a href="https://cloud.tencent.com/" target="_blank"
          ><img :src="tencentIcon" alt="腾讯云链接" />腾讯云</a
        >
      </p>
      <p class="upyun">
        <a href="https://www.upyun.com/" target="_blank"
          ><img :src="upyunPng" alt="又拍云地址"
        /></a>
        提供加速服务
      </p>
      <p class="before">
        页面构建
        <a
          href="https://cn.vuejs.org/"
          target="_blank"
          style="color:rgb(65,184,131)"
          >Vue.js<img :src="vue" alt="vue图片"
        /></a>
        +
        <a href="https://element.eleme.cn/#/zh-CN" target="_blank"
          ><img :src="element" alt="element图片"
        /></a>
      </p>
      <p class="node">
        后台搭建
        <a
          href="https://nodejs.org/en/"
          target="_blank"
          style="color:rgb(2,110,1)"
          >Node.js<img :src="node" alt="nodejs图片"
        /></a>
      </p>
      <p class="record">
        <span>湘ICP备2020018918号-1</span>
        <a
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=43010302001190"
          target="_blank"
          ><img :src="beian" alt="备案查询" />湘公网安备43010302001190号</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomFooter",
  data() {
    return {
      tencentIcon: require("../../assets/img/tencent.png"),
      upyunPng: require("../../assets/img/upyun.png"),
      beian: require("../../assets/img/beian.png"),
      vue: require("../../assets/img/vue.png"),
      node: require("../../assets/img/node.png"),
      element: require("../../assets/img/element.png"),
    }
  },
}
</script>

<style>
.el-footer {
  padding: 0;
  position: relative;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  height: auto !important;
}
.bottom-footer {
  position: relative;
  height: auto;
  width: 70vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  color: #cacaca;
}
.tencent {
  float: left;
  margin-right: 30px;
}
.tencent a {
  color: #00a4ff;
}
.bottom-footer a {
  text-decoration: none;
}
.left {
  margin: 0 auto;
}
.right {
  margin: 0 auto;
}
.right p {
  line-height: 21px;
  min-height: 21px;
}
.right img {
  height: 21px;
  vertical-align: middle;
}
.right::after {
  content: "";
  display: table;
  clear: both;
}
.record a {
  color: #cacaca;
}
@media only screen and (max-width: 600px){
  .bottom-footer{
    display: block;
  }
  .tencent{
    float: none;

  }
}
</style>
