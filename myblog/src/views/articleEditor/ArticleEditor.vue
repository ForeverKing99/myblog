<template>
  <div class="article-editor">
    <el-main>
      <el-dialog
        title="提示"
        :visible="isVisible"
        show-close
        center
        :modal="false"
        close-on-press-escape
        class="dialog"
        ><span>{{ commitMessage }}</span
        ><span slot="footer">
          <el-button @click="uploaded">确定</el-button></span
        ></el-dialog
      >
      <main-content>
        <div class="article-submit">
          <el-button type="primary" @click="articleSubmit">提交</el-button>
        </div>
        <mavon-editor
          ref="md"
          placeholder="请输入文档内容..."
          :boxShadow="false"
          style="z-index:1;border: 1px solid #d9d9d9;height:70vh"
          v-model="content"
          :toolbars="toolbars"/>
        <div>
          <input
            type="text"
            placeholder="请输入标题"
            v-model="title"
            class="editorInput"
          /><select id="select">
            <option value="编程">编程</option>
            <option value="生活">生活</option>
            <option value="随笔">随笔</option>
          </select>
        </div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          class="textarea"
          placeholder="请输入简介"
          v-model="summary"
        ></textarea></main-content
    ></el-main>
    <el-footer><bottom-footer></bottom-footer></el-footer>
  </div>
</template>

<script>
import MainContent from "components/common/MainContent.vue"
import BottomFooter from "components/common/BottomFooter.vue"
import { articleUpload } from "network/articleEditor.js"

export default {
  name: "ArticleEditor",
  props: {},
  components: {
    MainContent,
    BottomFooter,
  },
  data() {
    return {
      summary: "",
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: false, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true, // 预览
      },
      isVisible: false,
      commitMessage: "",
      title: "",
      content: "",
      tab:''
    }
  },
  methods: {
    // 上传图片方法
    $imgAdd(pos, $file) {
      console.log(pos, $file)
    },
    articleSubmit() {
      if (!this.content.replace(/^\s+|\s+$/g, "")) {
        this.commitMessage = "请输入内容"
        this.isVisible = true
      } else if (this.summary && this.content && this.title) {
        const obj = {
          content: this.content,
          summary: this.summary,
          title: this.title,
          tab: this.tab
        }
        articleUpload(obj)
          .then(res => {
            this.commitMessage = "成功"
            this.isVisible = true
          })
          .catch(err => {
            this.commitMessage = "提交失败"
            this.isVisible = true
            // console.log(err)
          })
      } else {
        this.commitMessage = "请输入完整信息"
        this.isVisible = true
      }
    },
    uploaded() {
      this.isVisible = false
    },
  },
  mounted() {
    this.tab = document.getElementById('select').value
    if(this.$store.state.login != true) this.$router.push('/home')
  },
}
</script>

<style scoped>
#select{
  outline: none;
  margin-left: 10px;
}
.textarea {
  resize: none;
  outline: none;
  width: 720px;
  height: 150px;
  /* border: none; */
  /* margin-left: 10px; */
}
.editorInput {
  width: 718px;
  height: 30px;
  /* border-radius: 5px; */
  outline: none;
  margin: 10px 0;
}

.article-editor {
  padding-top: 150px;
}
.main-content {
  width: 1440px;
  margin: 0 auto;
  max-width: 1920px;
}
.article-submit .el-button {
  padding: 10px;
  outline: none;
  border: none;
  background: white;
  color: #757575;
  margin-bottom: 5px;
}
</style>
