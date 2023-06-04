<template>
  <VideoLoader
    class="w-full"
    :options="{
      poster: poster,
      sources: [
        {
          type: 'video/mp4',
          src: src
        }
      ]
    }"
  />
</template>

<script>
import VideoLoader from '~/components/shared/VideoLoader.vue';

export default {
  components: { VideoLoader },
  props: {
    poster: {
      type: String,
      require: true
    },
    src: {
      type: String,
      require: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
