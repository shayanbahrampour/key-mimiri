<template>
  <Errors :error="{ statusCode: 404 }" />
</template>

<script>
import Errors from '@/components/shared/Errors';

export default {
  components: {
    Errors
  },
  layout: 'empty',
  fetch({ redirect }) {
    return redirect({
      name: 'error-id',
      params: { id: '404' }
    });
  },
  head() {
    return {
      title: 'Not Found!',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Not Found!'
        }
      ]
    };
  }
};
</script>
