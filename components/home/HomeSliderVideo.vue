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
      :style="`transition: all ease-in 0.4s; opacity:${flag.showFullscreen ? 1 : 0}`"
      :width="flag.showFullscreen ? '100vw' : 0"
      color="black"
      @touchend="closeFullscreen"
      @click.prevent="closeFullscreen"
    />

    <div
      :class="['position-relative z-1', isMobile && 'mx-auto', flag.showFullscreen && 'vjs-fullscreen w-screen h-auto']"
      @click="openFullscreen"
      @touchend="openFullscreen"
    >
      <VideoContents
        maxSize="600px"
        minSize="500px"
        :height="!flag.showFullscreen && isMobile ? '370px' : 'calc(100vh - 240px)'"
        :options="{
          loop: true,
          muted: true,
          fluid: true,
          autoplay: true,
          fullscreen: false,
          controls: flag.showFullscreen,
          aspectRatio: flag.showFullscreen ? '16:9' : '1:1'
        }"
        :src="flag.showFullscreen ? 'video/home-slider-detail.mp4' : '/video/home-slider.mp4'"
        :width="flag.showFullscreen ? '100vw' : isMobile ? '370px' : 'calc(100vh - 240px)'"
        class="my-auto d-flex align-center"
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
  watch: {
    'flag.showFullscreen': {
      immediate: true,
      handler() {
        this.$emit('showFullscreen', this.flag.showFullscreen);
      }
    }
  },
  methods: {
    closeFullscreen() {
      if (!this.flag.showFullscreen) return;
      if (this.isMobile) {
        setTimeout(() => {
          this.flag.showFullscreen = false;
        }, 300);

        return;
      }
      this.flag.showFullscreen = false;
    },
    openFullscreen() {
      if (this.flag.showFullscreen) return;
      if (this.isMobile) {
        setTimeout(() => {
          this.flag.showFullscreen = true;
        }, 300);

        return;
      }

      this.flag.showFullscreen = true;
    }
  }
};
</script>

<style lang="scss">
.custom-transition {
  transition: border-radius ease-out 50ms;
}
</style>
