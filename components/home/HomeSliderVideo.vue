<template>
  <div
    :class="[
      'pointer overflow-hidden custom-transition',
      flag.showFullscreen
        ? 'black position-fixed h-screen w-screen z-10 d-flex align-center justify-center rounded-0 top-0 start-0'
        : 'z-2 rounded-circle'
    ]"
  >
    <v-sheet
      :width="flag.showFullscreen ? '100vw' : 0"
      :height="flag.showFullscreen ? '100vh' : 0"
      color="black"
      :class="['position-absolute top-0 start-0 z-0']"
      @click="flag.showFullscreen = false"
    />
    <div :class="[flag.showFullscreen && 'w-screen position-relative z-1']" @click="flag.showFullscreen = true">
      <VideoContents
        :options="{
          fill: true,
          loop: true,
          muted: true,
          fluid: false,
          autoplay: true,
          controls: flag.showFullscreen,
          aspectRatio: flag.showFullscreen ? '16:9' : '1:1'
        }"
        :width="flag.showFullscreen ? '100vw' : videoSize"
        :height="flag.showFullscreen ? undefined : videoSize"
        :class="[!flag.showFullscreen && 'rounded-circle overflow-hidden my-auto']"
        src="/video/temp-2.mp4"
        poster="/images/temp/home-video.png"
      />
    </div>
  </div>
</template>

<script>
import VideoLoader from '@/components/shared/VideoLoader';
import VideoContents from '~/components/shared/VideoContents.vue';

export default {
  components: { VideoContents, VideoLoader },
  data() {
    return {
      player: '',
      flag: {
        showFullscreen: false
      }
    };
  },
  computed: {
    videoSize() {
      return this.isMobile ? '400px' : '600px';
    }
  }
};
</script>

<style lang="scss">
.custom-transition {
  transition: border-radius ease-in 1s;
}
</style>
