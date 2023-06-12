<template>
  <client-only>
    <VideoLoader
      v-if="src"
      :height="height"
      :maxSize="maxSize"
      :minSize="minSize"
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
    maxSize: {
      type: Number | String,
      default: null
    },
    minSize: {
      type: Number | String,
      default: null
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
