<template>
  <div class="forever">
    <h1>Forever王勇衡</h1>
    <button class="to-home" @click="toHome">Forever</button>
  </div>
</template>

<script>
export default {
  name: "Forever",
  methods: {
    toHome() {
      this.$router.push("/home").catch(err => {})
      this.$emit("homeClick")
    },
  },
}
</script>

<style>
.forever h1 {
  position: absolute;
  left: -9999px;
}
.to-home {
  width: 160px;
  height: 60px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  position: absolute;
  left: 2vw;
  z-index: 10000;
  color: #dfdfdf;
  line-height: 60px;
  font-size: 40px;
}
.to-home:hover {
  color: white;
}
@media only screen and (max-width: 600px){
  .forever{
    display: none;
  }
}
</style>
