<template>
  <el-container>
    <el-header>
      <el-menu
        :default-active="currentIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        router
        background-color="transparent"
      >
        <el-menu-item index="home">主页</el-menu-item>
        <el-menu-item index="about">关于</el-menu-item>
        <el-menu-item index="category">分类</el-menu-item>
      </el-menu>
    </el-header>
  </el-container>
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
    handleSelect(key, keyPath) {
      console.log(this.$route)
    },
  },
}
</script>

<style>
.el-container{
  position: sticky;
  top: 0;
  z-index: 100;
  background-color:transparent;
}
.el-menu {
  display: flex;
  justify-content: center;
}
.el-menu.el-menu--horizontal{
  border-bottom: none;
}
</style>
