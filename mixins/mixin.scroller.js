export default {
  data() {
    return {
      ballSize: 100,
      topScrollPosition: 0,
      bottomScrollPosition: 0
    };
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
      const navigationHeight = 56;
      const expandedNavigationHeight = 120;

      const scrollY = window.scrollY;
      const footer = document.getElementById('footer').offsetHeight;
      const clientHeight = document.documentElement.clientHeight - 70;
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
        clientHeight;

      const desireTopScrollPosition = (scrollY / scrollHeight) * scrollHeight + clientHeight * (scrollY / scrollHeight);
      this.topScrollPosition =
        scrollY < navigationHeight
          ? expandedNavigationHeight
          : Math.min(
              Math.max(desireTopScrollPosition, this.ballSize + navigationHeight / 2),
              scrollHeight + clientHeight - this.ballSize
            );

      const desireBottomScrollPosition = scrollY + clientHeight - (scrollY / scrollHeight) * clientHeight - 30;
      this.bottomScrollPosition =
        desireBottomScrollPosition > scrollHeight - this.ballSize - navigationHeight / 2
          ? Math.min(scrollY + navigationHeight, scrollHeight + clientHeight - this.ballSize)
          : desireBottomScrollPosition;
    }
  }
};
