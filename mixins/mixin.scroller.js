export default {
  data() {
    return {
      ballSize: 112,
      topScrollPosition: 0,
      bottomScrollPosition: 0
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.handleScroll();
      window.addEventListener('resize', this.handleScroll);
      window.addEventListener('scroll', this.handleScroll);
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleScroll);
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const navigationHeight = 56;
      const expandedNavigationHeight = this.isMobile ? 70 : 120;
      const footerMargin = 40;

      const scrollY = window.scrollY;
      const footer = document.getElementById('footer').offsetHeight;
      const clientHeight = document.documentElement.clientHeight - this.ballSize;
      const scrollHeight =
        Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.offsetHeight,
          document.body.clientHeight,
          document.documentElement.clientHeight
        ) -
        footer -
        footerMargin;

      const desireTopScrollPosition = scrollY + (scrollY / (scrollHeight - clientHeight + footerMargin)) * clientHeight;
      this.topScrollPosition = parseInt(
        scrollY <= navigationHeight
          ? expandedNavigationHeight
          : Math.min(desireTopScrollPosition + navigationHeight, scrollHeight - this.ballSize + footerMargin)
      );

      const desireBottomScrollPosition =
        scrollY + clientHeight - (scrollY / (scrollHeight - clientHeight + navigationHeight)) * clientHeight;
      this.bottomScrollPosition = Math.min(
        Math.max(
          scrollY + navigationHeight,
          parseInt(Math.min(desireBottomScrollPosition, scrollHeight - clientHeight - (this.isMobile ? 0 : 18)))
        ),
        scrollHeight - this.ballSize + footerMargin
      );
    }
  }
};
