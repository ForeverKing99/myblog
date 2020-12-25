<template>
  <div class="card-post">
    <div class="post-data">
      <div class="post-month">12月</div>
      <div class="post-day">22日</div>
    </div>
    <div class="post-badge">{{ postBadge }}</div>
  </div>
</template>

<script>
export default {
  name: "CardPost",
  data() {
    return {
      postBadge: "我是徽章",
    }
  },
}
</script>

<style>
.post-data {
  width: 70px;
  height: 70px;
  font-size: 14px;
  border-radius: 35px;
  /* border: 1px solid black; */
  box-shadow: 0 2px 12px rgba(151,223,253,0.85);
  position: absolute;
  transform: translate(-50%, -50%);
  left: 0;
  background: #97dffd;
  text-align: center;
}

.post-month {
  padding-top: 10px;
}
.post-badge {
  padding: 0 10px;
  height: 24px;
  line-height: 24px;
  /* border: 1px solid black; */
  border-radius: 3px;
  box-shadow: 0 2px 12px rgba(151,223,253,0.85);
  position: absolute;
  top: 50px;
  left: 0;
  background: #97dffd;
  font-size: 14px;
  transform: translateX(-14px);
}
.post-badge::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  border-width: 7px;
  border-style: solid;
  border-top-color: #47456d;
  border-left-color: transparent;
  border-right-color: #47456d;
  border-bottom-color: transparent;
}
</style>
