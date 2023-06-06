<template>
  <div
    :class="[
      'pointer overflow-hidden custom-transition',
      isMobile ? (flag.showFullscreen ? 'z-10' : 'z-1') : 'z-10',
      flag.showFullscreen
        ? 'black position-fixed h-screen w-screen d-flex align-center justify-center rounded-0 top-0 start-0'
        : 'z-2 rounded-circle'
    ]"
  >
    <v-fade-transition>
      <v-btn
        v-if="flag.showFullscreen"
        icon
        large
        class="position-fixed top-0 start-0 ma-2 z-1"
        @click="flag.showFullscreen = false"
      >
        <v-icon color="white">mdi-close</v-icon>
      </v-btn>
    </v-fade-transition>

    <v-sheet
      :width="flag.showFullscreen ? '100vw' : 0"
      :height="flag.showFullscreen ? '100vh' : 0"
      color="black"
      :class="['position-absolute top-0 start-0 z-0']"
      @click="flag.showFullscreen = false"
    />
    <v-sheet
      color="transparent"
      :class="['mx-auto', flag.showFullscreen && 'w-screen position-relative z-1']"
      @click="flag.showFullscreen = true"
      :width="flag.showFullscreen ? '90vw' : videoSize"
      :height="flag.showFullscreen ? undefined : videoSize"
    >
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
        :width="flag.showFullscreen ? '90vw' : videoSize"
        :height="flag.showFullscreen ? undefined : videoSize"
        :class="[flag.showFullscreen ? 'mx-auto' : 'my-auto']"
        src="/video/temp-2.mp4"
      />
    </v-sheet>
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
  }
};
</script>

<style lang="scss">
.custom-transition {
  transition: border-radius ease-out 50ms;
}
</style>
