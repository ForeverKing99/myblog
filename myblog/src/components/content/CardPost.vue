<template>
  <div class="card-post">
    <div class="post-data">
      <div class="post-month">{{ articleMonth }}月</div>
      <div class="post-day">{{ articleDay }}</div>
    </div>
    <div class="post-badge">
      {{ item.tab }}
    </div>
  </div>
</template>

<script>
export default {
  name: "CardPost",
  data() {
    return {}
  },
  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  computed: {
    articleDay() {
      if (!this.$store.state.time) {
        return new Date(this.item.time).getDate() || 1
      } else {
        return new Date(this.$store.state.time).getDate() || 1
      }
    },
    articleMonth() {
      if (!this.$store.state.time) {
        return new Date(this.item.time).getMonth() + 1 || 1
      } else {
        return new Date(this.$store.state.time).getMonth() + 1 || 1
      }
    },
    articleTab() {
      return this.$store.state.articleList.find(item => {
        return item._id == this.$store.state.currentId
      }).tab
    },
  },
}
</script>

<style>
.post-data {
  width: 70px;
  height: 70px;
  font-size: 14px;
  border-radius: 35px;
  box-shadow: 0 2px 12px rgba(151, 223, 253, 0.85);
  position: absolute;
  transform: translate(-50%, -50%);
  left: 0;
  background: #97dffd;
  text-align: center;
}

.post-month {
  color: white;
  padding-top: 10px;
  font-size: 12px;
}
.post-day {
  color: white;
  padding-top: 5px;
  font-size: 24px;
}
.post-badge {
  padding: 0 10px;
  height: 24px;
  line-height: 24px;
  border-radius: 3px;
  box-shadow: 0 2px 12px rgba(151, 223, 253, 0.85);
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
