<template>
  <client-only>
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
      @toggleFullscreen="$emit('toggleFullscreen', $event)"
      :style="size ? `height:${size};width:${size};max-height:${size};max-width:${size};` : ''"
    />
  </client-only>
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
    size: {
      type: Number | String,
      default: null
    },
    options: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style lang="scss" scoped></style>
