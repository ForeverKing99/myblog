<template>
  <div class="nav-bar" ref="nav">
    <forever></forever>
    <el-menu
      :default-active="currentIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="rgba(0, 0, 0, 0.4)"
      active-text-color="#409eef"
      text-color="#dcdcdc"
      router
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
      currentIndex: this.$route.path.replace('/',''),
    }
  },
  computed(){
    return {
      
    }
  },
  components: {
    Forever,
    SiteHeader,
  },
  methods: {
    handleSelect(key, keyPath) {
      this.currentIndex = key
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
.el-container {
  z-index: 3;
}
.nav-bar {
  position: sticky;
  top: 0;
  padding: 0;
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
.el-submenu__title:hover {
  background-color: rgba(34, 34, 34, 0.25) !important;
}
.el-menu--popup-bottom-start .el-menu-item {
  background-color: rgba(255, 255, 255, 0.7) !important;
}
.el-menu--popup-bottom-start .el-menu-item:hover {
  background-color: rgba(34, 34, 34, 1) !important;
  color: white !important ;
}
.el-submenu__title {
  background-color: transparent !important;
}
.el-menu-item:hover {
  background-color: rgba(34, 34, 34, 0.25) !important;
}
.el-menu-item {
  background-color: transparent !important;
}
.el-menu.el-menu--horizontal {
  border-bottom: none !important;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
}
.el-menu--popup-bottom-start {
  background-color: rgba(0, 0, 0, 0.15);
  flex-direction: column;
  min-width: 0px !important;
  padding: 0 !important;
}
.el-menu--popup-bottom-start li {
  width: 88px;
  text-align: center;
}
.el-icon-arrow-down:before {
  color: #dcdcdc;
}
</style>
