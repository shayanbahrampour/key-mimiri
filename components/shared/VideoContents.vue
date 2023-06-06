<template>
  <client-only>
    <VideoLoader
      v-if="src"
      :height="height"
      :options="{
        ...options,
        poster,
        sources: [
          {
            type: 'video/mp4',
            src
          }
        ]
      }"
      :width="width"
      class="vjs-theme-sea"
      @ready="$emit('ready', $event)"
      @toggleFullscreen="$emit('toggleFullscreen', $event)"
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
      default: ''
    },
    src: {
      type: String,
      default: ''
    },
    height: {
      type: Number | String,
      default: null
    },
    width: {
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
