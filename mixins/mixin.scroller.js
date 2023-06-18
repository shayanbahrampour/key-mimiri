export default {
  data() {
    return {
      scrollPosition: 0
    };
  },
  computed: {
    topScrollPosition() {
      if (!process.browser) return '120px';
      return Math.max(120, this.scrollPosition) + 'px';
    },
    bottomScrollPosition() {
      return '0px';
    }
  },
  mounted() {
    this.handleScroll();
    window.addEventListener('resize', this.handleScroll);
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const navigation = document.getElementById('navigation').offsetHeight;
      const footer = document.getElementById('footer').offsetHeight;
      const scrollHeight =
        Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.offsetHeight,
          document.body.clientHeight,
          document.documentElement.clientHeight
        ) -
        navigation -
        footer;

      console.log(window.scrollY);
      console.log('total Height', scrollHeight);
      // console.log('window height', document.documentElement.clientHeight);
    }
  }
};
