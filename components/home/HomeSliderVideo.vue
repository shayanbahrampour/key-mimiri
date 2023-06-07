<template>
  <div
    :class="[
      'pointer overflow-hidden custom-transition',
      flag.showFullscreen ? 'z-1' : 'z-10',
      flag.showFullscreen
        ? 'black position-fixed h-screen w-screen d-flex align-center justify-center rounded-0 top-0 start-0'
        : 'z-2 rounded-circle position-relative'
    ]"
  >
    <v-fade-transition>
      <v-btn
        v-if="flag.showFullscreen"
        class="position-fixed top-0 start-0 ma-2 z-2"
        color="black"
        fab
        @click="flag.showFullscreen = false"
      >
        <v-icon color="white">mdi-close</v-icon>
      </v-btn>
    </v-fade-transition>

    <v-sheet
      :class="['position-absolute top-0 start-0 z-0']"
      :height="flag.showFullscreen ? '100vh' : 0"
      :width="flag.showFullscreen ? '100vw' : 0"
      color="black"
      @click="flag.showFullscreen = false"
    />
    <div
      :class="[isMobile && 'mx-auto', flag.showFullscreen && 'w-screen h-screen position-relative']"
      @click="flag.showFullscreen = true"
      @touchstart="flag.showFullscreen = true"
    >
      <VideoContents
        :height="flag.showFullscreen ? '100vh' : videoSize"
        :options="{
          loop: true,
          muted: true,
          fluid: true,
          autoplay: true,
          controls: true,
          aspectRatio: flag.showFullscreen ? '16:9' : '1:1'
        }"
        :width="flag.showFullscreen ? '100vw' : videoSize"
        class="my-auto d-flex align-center"
        src="/video/temp-2.mp4"
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
      flag: {
        showFullscreen: false
      }
    };
  },
  computed: {
    videoSize() {
      return this.isMobile ? '370px' : '600px';
    }
  },
  watch: {
    'flag.showFullscreen': {
      immediate: true,
      handler() {
        this.$emit('showFullscreen', this.flag.showFullscreen);
      }
    }
  }
};
</script>

<style lang="scss">
.custom-transition {
  transition: border-radius ease-out 50ms;
}
</style>
