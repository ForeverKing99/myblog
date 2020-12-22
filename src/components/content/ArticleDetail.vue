<template>
  <article class="article-detail">
    <div class="article-wrap">
      <card-post></card-post>
      <div class="article-head">
        <h2 class="article-title">我是这个文章的标题</h2>
        <p class="article-meta">
          <img :src="calendar" alt="时间" /> 发表于 2020-12-19
          <img :src="word" alt="字数" /> 字数统计 0.8k
        </p>
      </div>
      <div class="article-body">
        <mavon-editor
          :value="articleBody"
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
export default {
  name: "ArticleDetail",
  components: {
    CardPost,
  },
  data() {
    return {
      articleBody: `<h1>完美打卡 PerfectClockIn</h1>
<blockquote><p>完美校园自动健康打卡，仅供个人研究/学习/欣赏,请勿用于商业用途,否则产生的一切后果将由您自己承担。</p>
</blockquote>
<h2>使用技术</h2>
<ul>
<li>ServerLess Function（云函数）</li>
<li>NodeJS（axios、emailjs）</li>

</ul>
<h2>使用方法</h2>
<h3>1.修改配置文件 config.js</h3>
<p>info 配置用于完美校园数据提交，参考 
<a href='https://github.com/ReaJason/17wanxiaoCheckin-Actions#一模拟器抓包获取数据如果你的手机已root可以直接用手机哦'>17wanxiaoCheckin-Actions</a>
进行抓包获得</p>
<pre><code>info: {
        TEXT: &quot;&quot;,//(学院专业班级信息)                例：林学院-林学(陶铸实验班)-2017林学(陶铸实验班)1班
        DEPTID: &quot;&quot;,//(部门、系ID)                     例：141670
        ADDRESS: &quot;&quot;,//(详细地址)                    例：非常富贵
        ADDTEXT: &quot;&quot;,//(省-市-县/区)                 例：江西省-南昌市-高新区
        CODE: &quot;&quot;,//(所在地区身份证前六位)                         例：360192
        STUNUM: &quot;&quot;,//(学号)                        例：20170101
        USERNAME: &quot;&quot;,//(姓名)                      例：小冯
        PHONENUM: &quot;&quot;,//(电话)                      例：...自己电话...
        USERID: &quot;&quot;,//(完美校园分配的用户id)          例：6274894
        EMERGENCY: &quot;&quot;,//(紧急联系人)                例：紧急人
        EMERGENCYPHONE: &quot;&quot;//(紧急联系人电话)        例：23667712771
    },

</code></pre>
<p>notice 配置用于消息通知，支持微信、邮箱</p>
<p>[微信sckey获取</p>
`,
      calendar: require("assets/img/calendar.svg"),
      word: require("assets/img/word.svg"),
    }
  },
}
</script>

<style>
article div {
  text-align: center;
}

.article-meta img{
  height: 16px;
}
.article-wrap {
  width: 100%;
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
</style>
