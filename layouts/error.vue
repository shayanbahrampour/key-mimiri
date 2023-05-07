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
      title: '404 Not Found!',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: '404 Not Found!'
        }
      ]
    };
  }
};
</script>
