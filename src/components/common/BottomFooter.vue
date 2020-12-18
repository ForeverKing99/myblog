<template>
  <div class="bottom-footer">
    <div class="left">
      <p>©2020 Forever</p>
      <p>此博客已运行1天8小时3分29秒</p>
    </div>
    <div class="right">
      <p class="tencent">
        托管于
        <a href="https://cloud.tencent.com/" target="_blank"
          ><img :src="tencentIcon" alt="腾讯云链接" />腾讯云</a
        >
      </p>
      <p class="upyun">
        <a href="https://www.upyun.com/" target="_blank"><img :src="upyunPng" alt="又拍云地址"/></a> 提供加速服务
      </p>
      <p class="record"><span>湘ICP备2020018918号-1</span>
       <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=43010302001190" target="_blank"><img :src="beian" alt="备案查询">湘公网安备43010302001190号</a></p>
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
      beian:require('../../assets/img/beian.png')
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
}
.bottom-footer {
  position: relative;
  height: 150px;
  width: 70vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  color: #cacaca;
}
.tencent {
  line-height: 21px;
  height: 21px;
  float: left;
  margin-right: 30px;
}
.tencent a{
  color: #00a4ff;
}
.tencent img {
  vertical-align: middle;
  width: 16px;
  height: 16px;
}
.upyun{
  line-height: 21px;
  height: 21px;
}
.upyun img{
  vertical-align: middle;
  height: 21px;
  
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
.right::after{
  content: '';
  display: table;
  clear: both;
}
.record a{
  color: #cacaca;
}
</style>
