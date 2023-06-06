<template>
  <client-only>
    <VideoLoader
      v-if="src"
      class="vjs-theme-sea"
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
      @ready="$emit('ready', $event)"
      @toggleFullscreen="$emit('toggleFullscreen', $event)"
      :style="`${height && `height:${height};max-height:${height};`} ${width && `width:${width};max-width:${width};`}`"
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
