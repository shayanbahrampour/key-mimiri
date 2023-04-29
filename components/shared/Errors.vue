<template>
  <v-row align="center" class="h-full py-12 h-screen" justify="center">
    <v-col class="text-center" lg="4" sm="6">
      <h1 class="error-code mb-0 text-nowrap red--text">{{ errorCode }}</h1>
      <p class="error-text font-weight-bold">{{ errorText }}</p>
      <v-sheet class="pa-4" color="#333" dark>
        <pre class="text-center text-wrap" dir="ltr" style="font-size: 22px">{{ error.message }}</pre>
      </v-sheet>

      <v-divider class="mb-4 mt-10" />

      <div class="d-flex align-center justify-center">
        <v-btn class="px-6" color="red" height="48" outlined to="/home">
          <span class="mr-2">صفحه نخست</span>
        </v-btn>
        <v-btn class="px-6 mr-4" color="light" depressed height="48" @click="$router.go()">
          <span class="mr-2">بارگذاری مجدد</span>
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    errorCode() {
      if (!this.error) return;

      const status = Number(this.error.statusCode) || 404;
      const errors = [401, 403, 404, 410, 500, 503];
      if (errors.includes(status)) return status;

      return 404;
    },
    errorText() {
      switch (this.errorCode) {
        case 401:
          return 'لطفا دوباره وارد سیستم شوید!';
        case 403:
          return 'شما اجازه دسترسی به این صفحه را ندارید!';
        case 404:
          return 'صفحه مورد نظر یافت نشد!';
        case 500:
          return 'با عرض پوزش، سیستم موقتا از دسترس خارج است!';
        case 503:
          return 'با عرض پوزش، سایت در حال به روزرسانی است!';
        default:
          return this.error.message || 'متاسفانه خطایی رخ داده است!';
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.error-code {
  line-height: 1;
  font-size: 100px;
}

.error-text {
  font-size: 22px;
}
</style>
