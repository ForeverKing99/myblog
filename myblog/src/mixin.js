const formatDate = {
  methods: {
    formatDate(date) {
      var date = new Date(date);
      var YY = date.getFullYear() + '-';
      var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      var DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
      return YY + MM + DD
    }
  },
}
const watchOne = {
  watch: {
    '$store.state.currentPath': function () {
      if (this.$store.state.currentPath.indexOf('articlePage') < 0 || this.$store.state.currentPath.indexOf('about') >= 0) {
        document.getElementsByClassName("el-tabs__header")[0].style.display = 'none'
        this.$store.state.aside = 'me'
      } else {
        document.getElementsByClassName("el-tabs__header")[0].style.display = 'flex'
        this.$store.state.aside = 'article'
      }
    }
  },
}
const search = {
  watch: {
    '$store.state.currentPath': function () {
      switch (this.$store.state.currentPath) {
        case 'code':
          this.$store.commit('listChange', '编程')
          break
        case 'life':
          this.$store.commit('listChange', '生活')
          break
        case 'note':
          this.$store.commit('listChange', '随笔')
          break
      }
    }
  }
}

const windowScroll = {
  data() {
    return {
      isFix: false,
    }
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > window.innerHeight) this.$store.commit('backshow', true)
      if (window.pageYOffset <= window.innerHeight) this.$store.commit('backshow', false)
      if (window.pageYOffset >= window.innerHeight && this.isFix == false) {
        this.$store.commit('isfix', true)
        this.isFix = true
      }
      if (window.pageYOffset < window.innerHeight && this.isFix == true) {
        this.$store.commit('isfix', false)
        this.isFix = false
      }
    }
  },
}
export { windowScroll, watchOne, formatDate, search }