<template>
  <div class="nav-bar" ref="nav">
    <forever @homeClick="scrollTo();currentIndex = 'home'"></forever>
    <el-menu
      :default-active="currentIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      active-text-color="#409eef"
      text-color="#dcdcdc"
    >
      <el-menu-item index="home">主页</el-menu-item>
      <el-menu-item index="about">关于</el-menu-item>
      <el-submenu :show-timeout="0" :hide-timeout="0" index="分类">
        <template slot="title">分类</template>
        <el-menu-item index="code" style="color:rgb(66,66,66)"
          >编程</el-menu-item
        >
        <el-menu-item index="life" style="color:rgb(66,66,66)"
          >生活</el-menu-item
        >
        <el-menu-item index="note" style="color:rgb(66,66,66)"
          >随笔</el-menu-item
        >
        <el-menu-item index="articleEditor" style="color:rgb(66,66,66)" class="editor"
          :class="{loginEditor:$store.state.login}">编辑</el-menu-item
        >
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import SiteHeader from "components/common/SiteHeader"
import Forever from "components/common/Forever"

export default {
  name: "NavBar",
  data() {
    return {
      currentIndex: this.$route.path.replace("/", ""),
      timeArray: [],
    }
  },
  components: {
    Forever,
    SiteHeader,
  },
  methods: {
    handleSelect(key, keyPath) {
      this.currentIndex = key
      this.$router.push("/" + key).catch(err => {})
    },
  },
  mounted() {
    const self = this
    setTimeout(() => {
      this.currentIndex = this.$route.path.replace("/", "")
    }, 500)
    setTimeout(() => {
      document.getElementsByClassName("lazyImg")[0].style.display = "none"
    }, 2000)
  },
}
</script>

<style>
.editor{
  display: none;
}
.el-menu--popup-bottom-start .loginEditor{
  display: list-item;
}
.el-container {
  z-index: 3;
}
.nav-bar {
  position: sticky;
  top: 0;
  padding: 0;
  font-size: 16px;
  z-index: 4;
}

.el-main {
  overflow: visible;
}
.el-menu {
  /* position: sticky !important;
  top: 0; */
  display: flex;
  justify-content: center;
  user-select: none;
  z-index: 3;
}
.el-menu--horizontal > .el-menu-item.is-active {
  color: black;
}
.el-menu--horizontal .el-menu li.el-menu-item {
  background-color: rgba(0, 0, 0, 0.5);
  color: white !important;
}
.el-menu--horizontal .el-menu li.el-menu-item:hover {
  background-color: rgba(255, 255, 255);
  color: black !important;
}
.el-submenu__title:hover {
  background-color: rgba(34, 34, 34, 0.25);
  color: black;
}
.nav-bar .el-submenu__title {
  padding: 0 18px;
  font-size: 16px;
}
.el-menu-item:hover {
  background-color: rgba(34, 34, 34, 0.25);
}
.el-menu .el-menu-item {
  font-size: 16px;
}
.nav-bar .el-menu--popup-bottom-start .el-menu-item:hover {
  background-color: rgba(34, 34, 34, 0.5) !important;
  color: white !important ;
}
.nav-bar .el-menu.el-menu--horizontal {
  border-bottom: none;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
}
ul.el-menu--popup-bottom-start {
  background-color: rgba(0, 0, 0, 0.15);
  flex-direction: column;
  min-width: 0px;
  padding: 0;
}
.el-menu--popup-bottom-start li {
  width: 88px;
  text-align: center;
}
.el-icon-arrow-down:before {
  color: #dcdcdc;
}
</style>
