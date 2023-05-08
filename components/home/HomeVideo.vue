<template>
  <div>
    <v-img
      max-width="100%"
      src="/images/temp/home_video_cover.png"
      max-height="80vh"
      :class="[
        'position-relative d-flex justify-center z-0 ',
        isMobile ? 'text-center align-start py-8' : 'align-end py-16'
      ]"
    >
      <v-img
        class="ma-auto position-absolute top-0 bottom-0 end-0 start-0 z-1"
        src="/images/home/home_video_button.svg"
        contain
        :max-width="isMobile ? 80 : 130"
        :max-height="isMobile ? 80 : 130"
        :height="isMobile ? 80 : 130"
        :width="isMobile ? 80 : 130"
      />
      <v-sheet
        color="transparent"
        :max-width="globalMaxWidth"
        class="px-4 position-relative z-1 mx-auto white--text w-full"
      >
        <v-row align="center" dense>
          <v-col lg="5" md="4" cols="12">
            <h3 :class="['font-weight-regular bel', isMobile ? 'f-40' : 'f-50']">Life at Cobel Group®</h3>
          </v-col>

          <template v-if="!isMobile">
            <v-col md="1">
              <v-divider vertical class="white" style="height: 100px" />
            </v-col>
            <v-col lg="6" md="7" cols="12">
              <div class="f-25 grey--text text--lighten-2 font-weight-light">
                Enjoyment of social interaction, sharing experience sense of belonging to a group, promoting
                participation
              </div>
            </v-col>
          </template>
        </v-row>
      </v-sheet>
    </v-img>
    <v-sheet height="16" class="custom-gradient my-1" />

    <v-sheet
      v-if="isMobile"
      color="transparent"
      :max-width="globalMaxWidth"
      class="px-4 mx-auto f-23 my-4 grey--text text--darken-2 font-weight-light text-center"
    >
      Enjoyment of social interaction, sharing experience sense of belonging to a group, promoting participation
    </v-sheet>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
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
