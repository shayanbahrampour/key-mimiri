<template>
  <VideoLoader
    :options="{
      ...options,
      poster,
      sources: [
        {
          type: 'video/mp4',
          src: src
        }
      ]
    }"
    class="w-full"
    @toggleFullscreen="$emit('toggleFullscreen', $event)"
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
    },
    options: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style lang="scss" scoped></style>
