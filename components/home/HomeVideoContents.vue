<template>
  <div>
    <v-sheet
      :class="[
        'position-absolute z-1 mx-auto white--text w-full d-flex',
        isMobile ? 'px-6 align-start top-0' : 'px-16 pb-15 align-end bottom-0'
      ]"
      :max-width="globalMaxWidth"
      color="transparent"
    >
      <div :class="['d-flex w-full', $vuetify.breakpoint.smAndDown ? 'flex-column' : 'flex-row align-center']">
        <h3
          :class="[
            'font-weight-regular bel',
            isMobile ? 'f-35 text-center pt-4 flex-grow-1' : lgAndUp ? 'f-60' : 'f-50'
          ]"
          :style="isMobile ? '' : `min-width: ${lgAndUp ? '500px' : '415px'}`"
        >
          {{ $t('homePage.video.title') }}
        </h3>
        <v-divider v-if="!isMobile" class="white mx-8" style="height: 100px" vertical />
        <div v-if="!isMobile" class="f-25 grey--text text--lighten-2 font-weight-light flex-grow-1">
          {{ $t('homePage.video.description') }}
        </div>
      </div>
    </v-sheet>

    <v-sheet :height="isMobile ? 10 : 16" class="custom-gradient my-1" />

    <v-sheet
      v-if="isMobile"
      :max-width="globalMaxWidth"
      class="px-6 mx-auto f-17 my-4 grey--text text--darken-2 font-weight-light text-center"
      color="transparent"
    >
      Enjoyment of social interaction, sharing experience sense of belonging to a group, promoting participation
    </v-sheet>
  </div>
</template>

<script>
export default {
  computed: {
    lgAndUp() {
      return this.$vuetify.breakpoint.lgAndUp;
    }
  }
};
</script>

<style lang="scss" scoped></style>
