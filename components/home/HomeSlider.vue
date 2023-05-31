<template>
  <v-sheet
    :height="isMobile ? 'calc(100vh - 270px)' : 'calc(100vh - 120px)'"
    class="position-relative mx-auto home-slider"
    color="transparent"
    min-height="550"
  >
    <client-only>
      <div
        :class="[
          'position-absolute white my-auto z-0 end-0 top-0 d-flex align-center',
          isMobile ? 'start-0 mx-auto justify-center' : 'h-screen bottom-0'
        ]"
        :style="`${isMobile ? 'top:-250px;' : `top:-120px; ${isRTL ? 'left' : 'right'}:-450px;`}`"
      >
        <VideoLoader
          class="rounded-circle overflow-hidden my-auto"
          :style="`height:${videoSize}px;width:${videoSize}px;max-height:${videoSize}px;max-width:${videoSize}px;`"
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
      </div>
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
  components: { VideoLoader },
  computed: {
    videoSize() {
      return this.isMobile ? 400 : 700;
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
