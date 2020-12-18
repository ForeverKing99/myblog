<template>
    <el-menu
      :default-active="currentIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="transparent"
      text-color="#dcdcdc"
      router
    >
      <el-menu-item index="home">主页</el-menu-item>
      <el-menu-item index="about">关于</el-menu-item>
      <el-submenu :show-timeout="0" :hide-timeout="0" index="分类">
        <template slot="title">分类</template>
        <el-menu-item index="code" style="color:rgb(66,66,66)">编程</el-menu-item>
        <el-menu-item index="life" style="color:rgb(66,66,66)">生活</el-menu-item>
        <el-menu-item index="note" style="color:rgb(66,66,66)">随笔</el-menu-item>
      </el-submenu>
    </el-menu>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      currentIndex: this.$route.path.replace("/", ""),
    }
  },
  methods: {
    handleSelect(key, keyPath) {},
  },
}
</script>

<style>
.el-header {
  position: sticky;
  top: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(4px);
}
.el-menu {
  display: flex;
  justify-content: center;
  user-select: none;
}
.el-submenu__title:hover{
  background-color: rgba(34,34,34,0.25) !important;
}
.el-menu-item:hover{
  background-color: rgba(34,34,34,0.25) !important;
}
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
.el-menu--popup-bottom-start {
  background-color: rgba(0, 0, 0, 0.15);
  flex-direction: column;
  min-width: 0px;
  padding: 0;
}
.el-menu--popup-bottom-start li {
  width: 88px;
  text-align: center;
}
</style>
