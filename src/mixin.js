const realPath = {
 
  created() {
    console.log('我是mixin');
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
      console.log(window.pageYOffset)
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
export { realPath, windowScroll }