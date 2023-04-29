<template>
  <Errors :error="error" />
</template>
<script>
import Errors from '~/components/shared/Errors';

export default {
  components: {
    Errors
  },
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  },
  head() {
    return {
      title: 'متاسفانه خطایی رخ داده است!',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'متاسفانه خطایی رخ داده است!'
        }
      ]
    };
  }
};
</script>
