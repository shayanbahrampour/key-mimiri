<template>
  <div>
    <v-sheet
      :class="[
        'position-absolute z-1 mx-auto white--text w-full d-flex',
        isMobile ? 'px-6 align-start top-0' : 'px-16 pb-8 align-end bottom-0'
      ]"
      :max-width="globalMaxWidth"
      color="transparent"
    >
      <v-row :align="isMobile ? 'start' : 'center'" no-gutters>
        <v-col cols="12" md="4" sm="5">
          <h3 :class="['font-weight-regular bel', isMobile ? 'f-40 text-center pt-4' : 'f-50']">
            {{ $t('homePage.video.title') }}
          </h3>
        </v-col>

        <template v-if="!isMobile">
          <v-col class="d-flex justify-center" cols="12" sm="1">
            <v-divider class="white mx-auto" style="height: 100px" vertical />
          </v-col>
          <v-col cols="12" md="7" sm="6">
            <div class="f-25 grey--text text--lighten-2 font-weight-light">
              {{ $t('homePage.video.description') }}
            </div>
          </v-col>
        </template>
      </v-row>
    </v-sheet>

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
export default {};
</script>

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
