import Vue from 'vue';
import locales from '~/lang';

Vue.mixin({
  computed: {
    isRTL() {
      return this.$vuetify.rtl;
    },
    isMobile() {
      if (this.$store.getters.getDevice)
        return this.$store.getters.getDevice.isMobile || this.$store.getters.getDevice.isTablet;

      if (!process.browser) return false;
      return this.$vuetify.breakpoint.smAndDown;
    }
  },
  methods: {
    toPersianDigit(input) {
      if (!input) return;
      return input.replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[d]);
    },
    generateId() {
      const idGenerator = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      };

      let result = '';
      for (let i = 0; i <= 3; i++) {
        result += idGenerator();
      }
      return result;
    },
    changeDirection() {
      const direction = locales.find((item) => item.code === this.$i18n.locale);
      if (direction) this.$vuetify.rtl = direction.dir === 'rtl';
    },
    errorHandler(error) {
      if (!error.response) return console.log(error);
      if (error.response.status === 500) {
        return this.$toast.error('با عرض پوزش، خطایی در سرور رخ داده و در حال برطرف کردن آن هستیم');
      }

      const response = error.response.data;
      if (!response || !response.data) return;
      if (response.data.length === 0) this.$toast.error(response.message);
      if (typeof response.data === 'string') return this.$toast.error(response.data);
      for (const item of Object.entries(response.data)) {
        if (item.length && item[1]) this.$toast.error(item[1]);
      }
    }
  }
});
