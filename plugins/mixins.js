import Vue from 'vue';

Vue.mixin({
  methods: {
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
