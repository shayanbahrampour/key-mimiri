<template>
  <div :class="['pointer overflow-hidden custom-transition', 'z-10', 'z-2 rounded-circle position-relative']">
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
      height="0"
      :style="`transition: all ease-in 0.4s; opacity:0`"
      :width="0"
      color="black"
    />

    <div :class="['position-relative z-1', isMobile && 'mx-auto']" @click="openFullscreen" @touchend="openFullscreen">
      <VideoContents
        :height="isMobile ? '370px' : 'calc(100vh - 240px)'"
        :maxSize="isMobile ? null : '600px'"
        :minSize="isMobile ? null : '500px'"
        :options="{
          loop: true,
          muted: true,
          fluid: true,
          controls: false,
          autoplay: true,
          fullscreen: false,
          aspectRatio: '1:1'
        }"
        src="/video/home-slider.mp4"
        :width="isMobile ? '370px' : 'calc(100vh - 240px)'"
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
    openFullscreen() {
      if (this.isMobile) {
        setTimeout(() => {
          this.flag.showFullscreen = true;
        }, 300);

        return;
      }

      this.flag.showFullscreen = true;
      this.$emit('showFullscreen', true);
    }
  }
};
</script>

<style lang="scss">
.custom-transition {
  transition: border-radius ease-out 50ms;
}
</style>
