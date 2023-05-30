<template>
  <v-sheet
    :class="['position-relative mx-auto', { 'pb-8': isMobile }]"
    :height="isMobile ? 'calc(100vh - 70px)' : 'calc(100vh - 120px)'"
    color="transparent"
    min-height="650"
  >
    <v-img
      :height="isMobile ? 400 : 650"
      :position="isRTL ? 'center left' : 'center right'"
      :style="`${isMobile ? 'top:-250px' : `${isRTL ? 'left' : 'right'}:-450px;bottom:0;top:0;`};`"
      :width="isMobile ? 400 : 650"
      :class="['position-absolute my-auto z-0 rounded-circle', { 'mx-auto start-0 end-0': isMobile }]"
      src="/images/temp/home.png"
    />

    <v-sheet
      :class="['position-relative z-1 mx-auto d-flex align-center', isMobile ? 'px-8' : 'px-16']"
      :max-width="globalMaxWidth"
      color="transparent"
      height="100%"
    >
      <v-row>
        <v-col cols="12" lg="8" md="9">
          <h1 :class="['bel grey--text text--darken-2 font-weight-regular mb-8', isMobile ? 'f-50 pt-10' : 'f-70']">
            {{ $t('homePage.slider.title') }}
          </h1>

          <v-btn
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
            :class="['f-18 px-14 text-capitalize', isMobile ? 'mt-3' : 'mx-4']"
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

    <v-btn
      v-if="isMobile"
      block
      class="f-18 position-absolute bottom-0 text-capitalize grey--text text--darken-2 mb-16"
      depressed
      exact
      large
      rounded
      text
    >
      <div class="d-flex flex-column justify-center align-center">
        <div>{{ $t('homePage.slider.swipe_down') }}</div>
        <v-icon class="mt-2">mdi-chevron-double-down</v-icon>
      </div>
    </v-btn>
  </v-sheet>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
