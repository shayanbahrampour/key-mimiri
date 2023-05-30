<template>
  <div>
    <div class="position-relative home-video">
      <client-only>
        <VideoLoader
          ref="home-video"
          class="w-full"
          :options="{
            fill: true,
            poster: '/images/temp/cover-6.png',
            sources: [
              {
                type: 'video/mp4',
                src: '/video/main.mp4'
              }
            ]
          }"
        />
      </client-only>

      <v-sheet
        :class="[
          'position-absolute bottom-0 z-1 mx-auto white--text w-full h-full d-flex',
          isMobile ? 'px-6 align-start' : 'px-16 pb-8 align-end'
        ]"
        :max-width="globalMaxWidth"
        color="transparent"
      >
        <v-row :align="isMobile ? 'start' : 'center'" dense>
          <v-col cols="12" lg="5" md="4">
            <h3 :class="['font-weight-regular bel', isMobile ? 'f-40 text-center pt-4' : 'f-50']">
              {{ $t('homePage.video.title') }}
            </h3>
          </v-col>

          <template v-if="!isMobile">
            <v-col md="1" cols="12">
              <v-divider class="white" style="height: 100px" vertical />
            </v-col>
            <v-col cols="12" lg="6" md="7">
              <div class="f-25 grey--text text--lighten-2 font-weight-light">
                {{ $t('homePage.video.description') }}
              </div>
            </v-col>
          </template>
        </v-row>
      </v-sheet>
    </div>

    <v-sheet class="custom-gradient my-1" height="16" />

    <v-sheet
      v-if="isMobile"
      :max-width="globalMaxWidth"
      class="px-6 mx-auto f-23 my-4 grey--text text--darken-2 font-weight-light text-center"
      color="transparent"
    >
      Enjoyment of social interaction, sharing experience sense of belonging to a group, promoting participation
    </v-sheet>
  </div>
</template>

<script>
import VideoLoader from '~/components/shared/VideoLoader.vue';

export default {
  components: { VideoLoader }
};
</script>

<style lang="scss">
.home-video {
  .video-js {
    height: 100% !important;
  }
}
</style>

<style lang="scss" scoped>
.custom-gradient {
  background-image: -webkit-linear-gradient(
    90deg,
    rgba(243, 145, 31, 1) 8%,
    rgba(160, 30, 100, 1) 51%,
    rgba(0, 165, 155, 1) 100%
  );
  background-image: -moz-linear-gradient(
    90deg,
    rgba(243, 145, 31, 1) 8%,
    rgba(160, 30, 100, 1) 51%,
    rgba(0, 165, 155, 1) 100%
  );
  background-image: -o-linear-gradient(
    90deg,
    rgba(243, 145, 31, 1) 8%,
    rgba(160, 30, 100, 1) 51%,
    rgba(0, 165, 155, 1) 100%
  );
  background-image: linear-gradient(
    90deg,
    rgba(243, 145, 31, 1) 8%,
    rgba(160, 30, 100, 1) 51%,
    rgba(0, 165, 155, 1) 100%
  );
}
</style>
