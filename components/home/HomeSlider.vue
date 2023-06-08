<template>
  <v-sheet
    :height="isMobile ? 'calc(100vh - 130px)' : 'calc(100vh - 120px)'"
    class="position-relative mx-auto home-slider"
    color="transparent"
    min-height="550"
  >
    <v-sheet
      :class="[
        'my-auto right-0 top-0 d-flex align-center position-absolute',
        isMobile ? 'start-0 mx-auto justify-center' : 'h-screen bottom-0',
        flag.showFullscreen ? 'z-10' : 'z-2'
      ]"
      :style="`${isMobile ? 'top:-220px;' : `top:-120px;right:-450px;`}`"
      color="white"
    >
      <HomeSliderVideo @showFullscreen="flag.showFullscreen = $event" />
    </v-sheet>

    <v-sheet
      :class="['position-relative z-1 mx-auto d-flex align-center', isMobile ? 'px-8' : 'px-16']"
      :max-width="globalMaxWidth"
      :style="isMobile ? '' : 'top:-30px;'"
      color="transparent"
      height="100%"
    >
      <v-row :class="isRTL && 'ltr'">
        <v-col cols="12" lg="8" sm="9">
          <h1
            :class="[
              'grey--text text--darken-2 font-weight-regular mb-8',
              isMobile ? 'f-38 pt-16 mt-12' : 'f-70',
              isRTL ? 'ravi' : 'bel'
            ]"
          >
            {{ $t('homePage.slider.title') }}
          </h1>

          <v-btn
            v-if="!isMobile"
            :block="isMobile"
            :class="['f-18 text-capitalize', { 'ms-n4': !isMobile }, { 'font-weight-bold anjoman': isRTL }]"
            depressed
            exact
            large
            rounded
            text
            color="#59595B"
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
            {{ isMobile ? $t('homePage.slider.about_cobel_group') : $t('homePage.slider.cobel_group') }}
          </v-btn>
        </v-col>
      </v-row>
    </v-sheet>
  </v-sheet>
</template>

<script>
import VideoLoader from '@/components/shared/VideoLoader';
import VideoContents from '~/components/shared/VideoContents.vue';
import HomeSliderVideo from '~/components/home/HomeSliderVideo.vue';

export default {
  components: { HomeSliderVideo, VideoContents, VideoLoader },
  data() {
    return {
      flag: {
        showFullscreen: false
      }
    };
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
