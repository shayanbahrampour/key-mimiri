<template>
  <v-sheet
    class="position-relative mx-auto"
    color="transparent"
    :height="isMobile ? 'calc(100vh - 180px)' : 'calc(100vh - 120px)'"
    min-height="550"
  >
    <v-img
      :class="['position-absolute my-auto z-0 rounded-circle', { 'mx-auto start-0 end-0': isMobile }]"
      :height="isMobile ? 400 : 650"
      :position="isRTL ? 'center left' : 'center right'"
      :style="`${isMobile ? 'top:-250px' : `${isRTL ? 'left' : 'right'}:-450px;bottom:0;top:0;`};`"
      :width="isMobile ? 400 : 650"
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
export default {};
</script>

<style lang="scss" scoped></style>
