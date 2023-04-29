<template>
  <Errors :error="{ statusCode: $route.params.id }" />
</template>
<script>
import Errors from '@/components/shared/Errors';

export default {
  components: {
    Errors
  },
  layout: 'empty',
  head() {
    return {
      title: `خطای ${this.$route.params.id}`,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: `خطای ${this.$route.params.id}`
        }
      ]
    };
  }
};
</script>
