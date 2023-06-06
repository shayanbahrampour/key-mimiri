<template>
  <v-sheet
    :height="isMobile ? 'calc(100vh - 270px)' : 'calc(100vh - 120px)'"
    class="position-relative mx-auto home-slider"
    color="transparent"
    min-height="550"
  >
    <v-sheet
      :class="[
        'my-auto z-2 end-0 top-0 d-flex align-center',
        isMobile ? 'start-0 mx-auto justify-center' : 'h-screen bottom-0',
        flag.showFullscreen ? 'w-screen start-0 position-fixed' : 'position-absolute'
      ]"
      :color="flag.showFullscreen ? 'black' : 'white'"
      :style="`${isMobile ? 'top:-250px;' : `top:-120px; ${isRTL ? 'left' : 'right'}:-450px;`}`"
      @click="flag.showFullscreen = true"
    >
      <VideoContents
        :options="{
          fill: true,
          loop: true,
          muted: true,
          fluid: false,
          autoplay: true,
          controls: false,
          aspectRatio: '1:1'
        }"
        :width="videoSize"
        :height="videoSize"
        class="rounded-circle overflow-hidden my-auto"
        src="/video/temp-2.mp4"
        poster="/images/temp/home-video.png"
      />
    </v-sheet>

    <v-sheet
      :class="['position-relative z-1 mx-auto d-flex align-center', isMobile ? 'px-8' : 'px-16']"
      :max-width="globalMaxWidth"
      color="transparent"
      height="100%"
      :style="isMobile ? '' : 'top:-30px;'"
    >
      <v-row>
        <v-col cols="12" lg="8" sm="9">
          <h1
            :class="['bel grey--text text--darken-2 font-weight-regular mb-8', isMobile ? 'f-38 pt-16 mt-12' : 'f-70']"
          >
            {{ $t('homePage.slider.title') }}
          </h1>

          <v-btn
            v-if="!isMobile"
            :block="isMobile"
            :class="['f-18 text-capitalize grey--text', { 'ml-n4': !isMobile }]"
            depressed
            exact
            large
            rounded
            text
          >
            {{ $t('homePage.slider.more_about') }}
          </v-btn>
          <v-btn
            :block="isMobile"
            :class="['f-18 px-14 text-capitalize', isMobile ? 'mt-16' : 'mx-4']"
            color="primary"
            depressed
            exact
            large
            rounded
          >
            {{ $t('homePage.slider.cobel_group') }}
          </v-btn>
        </v-col>
      </v-row>
    </v-sheet>
  </v-sheet>
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
      if (this.flag.showFullscreen) return '100%';
      return this.isMobile ? '400px' : '600px';
    }
  }
};
</script>

<style lang="scss">
.home-slider {
  video {
    object-fit: cover;
  }
}
</style>
