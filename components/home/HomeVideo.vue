<template>
  <div>
    <v-img
      :class="[
        'position-relative d-flex justify-center z-0 mx-auto',
        isMobile ? 'text-center align-start py-8' : 'align-end py-16'
      ]"
      :max-height="isMobile ? 500 : 800"
      height="85vh"
      min-height="500"
      src="/images/temp/cover-6.png"
    >
      <v-img
        :height="isMobile ? 80 : 130"
        :max-height="isMobile ? 80 : 130"
        :max-width="isMobile ? 80 : 130"
        :width="isMobile ? 80 : 130"
        class="ma-auto position-absolute top-0 bottom-0 end-0 start-0 z-1"
        contain
        src="/images/home/home_video_button.svg"
      />
      <v-sheet
        :max-width="globalMaxWidth"
        class="position-relative z-1 mx-auto white--text w-full px-16"
        color="transparent"
      >
        <v-row align="center" dense>
          <v-col cols="12" lg="5" md="4">
            <h3 class="font-weight-regular bel f-50">
              {{ $t('homePage.video.title') }}
            </h3>
          </v-col>

          <template v-if="!isMobile">
            <v-col md="1">
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
    </v-img>

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

<style lang="scss" scoped>
.custom-gradient {
  background-image: -webkit-linear-gradient(
    -90deg,
    rgba(243, 145, 31, 1) 8%,
    rgba(160, 30, 100, 1) 51%,
    rgba(0, 165, 155, 1) 100%
  );
  background-image: -moz-linear-gradient(
    -90deg,
    rgba(243, 145, 31, 1) 8%,
    rgba(160, 30, 100, 1) 51%,
    rgba(0, 165, 155, 1) 100%
  );
  background-image: -o-linear-gradient(
    -90deg,
    rgba(243, 145, 31, 1) 8%,
    rgba(160, 30, 100, 1) 51%,
    rgba(0, 165, 155, 1) 100%
  );
  background-image: linear-gradient(
    -90deg,
    rgba(243, 145, 31, 1) 8%,
    rgba(160, 30, 100, 1) 51%,
    rgba(0, 165, 155, 1) 100%
  );
}
</style>
