<template>
  <v-sheet
    :height="isMobile ? 'calc(100vh - 180px)' : 'calc(100vh - 140px)'"
    class="position-relative mx-auto home-slider"
    color="transparent"
    min-height="550"
    max-height="900"
  >
    <client-only>
      <VideoLoader
        :style="`${isMobile ? 'top:-250px;' : `${isRTL ? 'left' : 'right'}:-450px;bottom:0;`}height:${
          isMobile ? 400 : 650
        }px;width:${isMobile ? 400 : 650}px;max-height:${isMobile ? 400 : 650}px;max-width:${isMobile ? 400 : 650}px;`"
        :class="[
          'position-absolute white my-auto z-0 rounded-circle overflow-hidden end-0 rounded-circle top-0',
          { 'mx-auto start-0 end-0': isMobile }
        ]"
        :options="{
          fill: true,
          loop: true,
          muted: true,
          fluid: false,
          autoplay: true,
          controls: false,
          aspectRatio: '1:1',
          sources: [
            {
              type: 'video/mp4',
              src: '/video/temp-2.mp4'
            }
          ]
        }"
      />
    </client-only>

    <v-sheet
      :class="['position-relative z-1 mx-auto d-flex align-center', isMobile ? 'px-8' : 'px-16']"
      :max-width="globalMaxWidth"
      color="transparent"
      height="100%"
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

export default {
  components: { VideoLoader }
};
</script>

<style lang="scss">
.home-slider {
  video {
    object-fit: cover;
  }
}
</style>
