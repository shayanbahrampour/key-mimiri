<template>
  <v-sheet
    :height="isMobile ? 'calc(100vh - 130px)' : `calc(100vh - ${screenHeight < 760 ? 80 : 120}px)`"
    class="position-relative mx-auto home-slider overflow-hidden"
    color="transparent"
    min-height="500"
  >
    <v-sheet
      :class="[
        'my-auto right-0 top-0 d-flex align-center position-absolute',
        isMobile ? 'start-0 mx-auto justify-center w-screen' : 'h-screen bottom-0',
        flag.showFullscreen ? 'z-10' : 'z-2'
      ]"
      :style="`${isMobile ? 'top:-250px;' : `top:-${screenHeight < 760 ? 40 : 90}px;right:-360px;`}`"
      color="white"
    >
      <HomeSliderVideo @showFullscreen="flag.video = $event" :isFullScreen="flag.video" />
    </v-sheet>

    <v-sheet
      :class="['position-relative z-1 mx-auto d-flex align-center', isMobile ? 'px-8' : 'px-16']"
      :style="isMobile ? '' : 'top:-30px;'"
      color="transparent"
      height="100%"
      min-height="500"
    >
      <v-row :class="isRTL && 'ltr'" justify="center" justify-md="start">
        <v-col cols="12" lg="8" sm="9">
          <h1
            :class="[
              'grey--text text--darken-2 mb-8 font-weight-regular',
              { 'pt-16 mt-12': isMobile },
              isMobile ? (isRTL ? 'f-40' : 'f-40') : isRTL ? 'f-60' : 'f-70',
              isRTL ? 'ravi' : 'bel',
              isRTL && isMobile && 'text-center'
            ]"
          >
            {{ $t('homePage.slider.title') }}
          </h1>

          <div :class="isRTL && 'rtl d-flex justify-end'">
            <span
              v-if="!isMobile"
              :block="isMobile"
              :class="[
                'f-18 text-capitalize cobelgrey--text',
                { 'ml-n4 px-6': !isMobile && !isRTL },
                { 'font-weight-light anjoman px-6 mt-2': isRTL }
              ]"
              color="#59595B"
              depressed
              exact
              large
              rounded
              text
            >
              {{ $t('homePage.slider.more_about') }}
            </span>
            <v-btn
              :block="isMobile"
              :class="['f-20 px-14 text-capitalize bel', { 'mt-16': isMobile }, { ltr: isRTL }]"
              color="primary"
              depressed
              exact
              large
              rounded
              @click="!isMobile ? (flag.video = !flag.video) : undefined"
            >
              <span class="position-relative" style="top: 1px">
                {{ isMobile ? $t('homePage.slider.about_cobel_group') : $t('homePage.slider.cobel_group') }}
              </span>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-sheet>
    <v-dialog v-model="flag.video" fullscreen hide-overlay transition="dialog-bottom-transition">
      <client-only>
        <VideoScroller v-if="flag.video" @close="flag.video = !flag.video" />
      </client-only>
    </v-dialog>
  </v-sheet>
</template>

<script>
import VideoLoader from '@/components/shared/VideoLoader';
import VideoScroller from '../shared/VideoScroller';
import VideoContents from '~/components/shared/VideoContents.vue';
import HomeSliderVideo from '~/components/home/HomeSliderVideo.vue';

export default {
  components: { HomeSliderVideo, VideoContents, VideoLoader, VideoScroller },
  data() {
    return {
      dialog: false,
      screenHeight: 1080,
      flag: {
        showFullscreen: false,
        video: false
      }
    };
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.calculateHeight);
  },
  mounted() {
    this.calculateHeight();
    window.addEventListener('resize', this.calculateHeight);
  },
  methods: {
    calculateHeight() {
      this.screenHeight = window.innerHeight;
    }
  }
};
</script>

<style lang="scss">
.home-slider {
  video {
    object-fit: cover;
  }

  .vjs-fullscreen-control {
    cursor: default !important;
    margin: 0 !important;
    opacity: 0 !important;
    visibility: hidden;
    z-index: -1;
  }
}
</style>
