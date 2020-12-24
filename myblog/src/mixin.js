const realPath = {
  created() {
    // console.log('我是mixin');
  },
  
}

const watchOne = {
  watch: {
    '$store.state.currentPath':function(){
      if(this.$store.state.currentPath.indexOf('articlePage') < 0 || this.$store.state.currentPath.indexOf('about') >= 0){
        document.getElementsByClassName("el-tabs__header")[0].style.display = 'none'
        this.$store.state.aside = 'me'
      }else{
        document.getElementsByClassName("el-tabs__header")[0].style.display = 'flex'
        this.$store.state.aside = 'article'
      }
    }

  },
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
        this.$store.commit('isfix',true)
        this.isFix = true
      }
      if (window.pageYOffset < window.innerHeight && this.isFix == true) {
        this.$store.commit('isfix',false)
        this.isFix = false
      }
    }
  },
}
export { realPath, windowScroll ,watchOne }