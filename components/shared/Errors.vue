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
        <v-btn :to="localePath('/')" class="px-6 mx-2" color="red" height="48" outlined>{{ $t('error.home') }}</v-btn>
        <v-btn class="px-6 mx-2" color="light" depressed height="48" outlined @click="$router.go()">
          {{ $t('error.reload') }}
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
          return 'Please login again!';
        case 403:
          return 'Forbidden!';
        case 404:
          return 'Not Found';
        case 500:
          return 'Internal Server Error';
        case 503:
          return 'Service Unavailable';
        default:
          return this.error.message || 'Something is missing!';
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
  font-size: 25px;
}
</style>
